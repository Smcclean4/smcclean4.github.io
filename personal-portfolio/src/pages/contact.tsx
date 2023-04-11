import { Layout } from "@/components/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faMailBulk } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl pb-10"><b>Feel free to contact me at any of the sources listed below.</b></p>
        <p className="text-xl">I look forward to working with you soon.</p>
        <div>
          <ul className="flex flex-row flex-wrap">
            <FontAwesomeIcon className="m-10 animate-pulse" icon={faGithub} size="2xl" style={{ color: "white", }} />
            <FontAwesomeIcon className="m-10 animate-pulse" icon={faLinkedin} size="2xl" style={{ color: "white", }} />
            <FontAwesomeIcon className="m-10 animate-pulse" icon={faMailBulk} size="2xl" style={{ color: "white", }} />
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Contact