import { Link } from "react-router-dom";
import Histogram from "../../components/histogram/histogram";
import { githubProfile } from "../../utils/personalData";

const data = {
  "Jenuary 2023": 20,
  "December 2024": 33,
  "November 2024": 17,
}

const Line = () => (
  <div className="w-full text-txSecondary text-xs overflow-hidden">
    {"=".repeat(100)}
  </div>
)

export default function Home() {
  return (
    <div className="mt-4 pb-4 relative flex-grow overflow-auto flex flex-col gap-4 p-2 max-w-2xl m-auto">

      <h1 className="text-txTitle"># How am i?</h1>
      <img src="/profile.jpg" className="w-1/6 max-lg:w-1/3" alt="profile" />
      <p>
        Hi, I'm Pietro 👋, a student at UniFe 🎓, studying Computer Science. I'm passionate about technology and programming, with a particular interest in web development and algorithms 💻. I’m always open to feedback and collaborations, so feel free to reach out if you want to discuss technology or exchange ideas!
      </p>

      <Line />

      <h1 className="text-txTitle"># Open Source</h1>
      <p>
        In modern system development, effective monitoring and logging are crucial for maintaining reliability and performance. Monitoring provides real-time insights into the system’s health, helping developers and operators detect and address issues before they impact users.
      </p>
      <div className="text-sm">
        My profile: <Link to={githubProfile} target="_blank" className="p-1 text-txLink !no-underline hover:bg-txLink hover:text-body">[github:@pietropeerani]</Link>
      </div>
      <h2 className="text-txTitle">## Contributions</h2>
      <Histogram data={data} />
    </div>
  )
}
