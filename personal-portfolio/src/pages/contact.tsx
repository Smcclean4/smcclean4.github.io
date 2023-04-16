import { Layout } from "@/components/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faGitkraken, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faMailBulk } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center text-center w-3/4">
        <p className="text-2xl pb-10"><b>Feel free to contact me at any source listed below.</b></p>
        <p className="text-xl">I look forward to working with you soon.</p>
        <div>
          <ul className="flex flex-row">
            <a target="_blank" href="https://www.github.com/smcclean4"><FontAwesomeIcon className="m-4 sm:m-10 animate-pulse" icon={faGithub} size="2xl" style={{ color: "white", }} /></a>
            <a target="_blank" href="https://www.linkedin.com/in/sidney-mcclean"><FontAwesomeIcon className="m-4 sm:m-10 animate-pulse" icon={faLinkedin} size="2xl" style={{ color: "white", }} /></a>
            <a href="mailto:mccleansid@icloud.com"><FontAwesomeIcon className="m-4 sm:m-10 animate-pulse" icon={faMailBulk} size="2xl" style={{ color: "white", }} /></a>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Contact