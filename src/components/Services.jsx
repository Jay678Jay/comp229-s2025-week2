import web from "../../webDev.jpg";
import mobile from "../../mobileApp.jpg";
import program from "../../programming.jpg";

export default function Services() {
    return (
    <div className="services-page">
    <h1>Services</h1>

      <div className="service">
        <img src={web} alt="Web Development" />
        <div>
          <h2>Web Development</h2>
          <p>Build responsive websites using HTML, CSS, and JavaScript.</p>
        </div>
      </div>

      <div className="service">
        <img src={mobile} alt="Mobile Design" />
        <div>
          <h2>Mobile App Design</h2>
          <p>Design basic mobile-friendly layouts and UI for Android apps.</p>
        </div>
      </div>

      <div className="service">
        <img src={program} alt="Programming" />
        <div>
          <h2>General Programming</h2>
          <p>Write, debug, and explain code in JavaScript or C#.</p>
        </div>
      </div>

    </div>
    )

}