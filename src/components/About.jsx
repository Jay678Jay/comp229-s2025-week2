import image from '../../image.png';

export default function About() {
    return (
    <div>   
        <h1>About Me</h1>
        <img src={image} alt="Image" className="image" />
        <p style={{ fontSize: '20px' }}>My name is Jongwon Lee, and I'm in my third semester of the Software Engineering program at Centennial College. <br /> My goal is to pursue a career as a software developer.</p>
        <a href="../../resume.pdf" target="_blank">Link to my resume</a>
    </div>
)
}