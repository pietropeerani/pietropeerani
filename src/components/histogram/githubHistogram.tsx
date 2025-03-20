import React from "react";
import Histogram from "./histogram";

type CommitsByMonth = Record<string, number>;

async function getAllCommitsByUser(username: string): Promise<CommitsByMonth> {
  const apiUrl = `https://api.github.com/users/${username}/repos`;
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };

  const now = new Date();
  const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), 1);

  const commitsByMonth: CommitsByMonth = {};

  try {
    const repoResponse = await fetch(`${apiUrl}?per_page=100`, { headers });

    if (!repoResponse.ok) {
      throw new Error(`Failed to fetch repositories: ${repoResponse.statusText}`);
    }

    const repos: { name: string; owner: { login: string } }[] = await repoResponse.json();

    for (const repo of repos) {
      let page = 1;
      let keepFetching = true;

      while (keepFetching) {
        const commitsResponse = await fetch(
          `https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits?since=${oneYearAgo.toISOString()}&per_page=100&page=${page}`,
          { headers }
        );

        if (!commitsResponse.ok) {
          if (commitsResponse.status === 403) {
            throw new Error(
              "Rate limit exceeded for unauthenticated requests. Please try again later."
            );
          }
          throw new Error(
            `Failed to fetch commits for repo ${repo.name}: ${commitsResponse.statusText}`
          );
        }

        type Commit = {
          commit: { author: { date: string } };
          committer: { login: string } | null;
        };

        const commits: Commit[] = await commitsResponse.json();

        if (commits.length === 0) {
          keepFetching = false;
          break;
        }

        for (const commit of commits) {
          if (commit.committer?.login === username) {
            const commitDate = new Date(commit.commit.author.date);
             // Format as "February 2024"
            const formattedDate = new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
            }).format(commitDate);

            if (!commitsByMonth[formattedDate]) {
              commitsByMonth[formattedDate] = 0;
            }

            commitsByMonth[formattedDate]++;
          }
        }

        page++;
      }
    }

    const last12Months: CommitsByMonth = {};
    for (let i = 0; i < 12; i++) {
      const currentDate = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
      }).format(currentDate);

      last12Months[formattedDate] = commitsByMonth[formattedDate] || 0;
    }

    return last12Months;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const username = "pietropeerani";

export default function GithubHistogram() {
  const [data, setData] = React.useState<CommitsByMonth | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    getAllCommitsByUser(username)
      .then((fetchedData) => setData(fetchedData))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div>Error loading data: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return <Histogram data={data} />;
}
