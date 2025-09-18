import styles from "./Contact.module.css";
// import { useRef } from "react";
import {useState} from "react";
import emailjs from "emailjs-com";
export default function Contact() {

  const form = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y2fhrmu", // from EmailJS
        "template_hnzow8s", // from EmailJS
        form.current,
        "oT1FBEZmqSxBvOzYN" // from EmailJS
      )
      .then(
        () => {
          alert("Message sent successfully");
          e.target.reset();
        },
        (error) => {
          alert("Message failed : " + error.text);
        }
      );
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact </h2>
      <div className={styles.connect}>
        <div className={styles.connect_card1}>
          <p>
            I’m always open to new opportunities, collaborations <br /> or just
            a good tech chat.{" "}
          </p>{" "}
          <br />
          <p>📍 Location: Balewadi Pune, India - 411045</p>
          <p>📧 Email: swapnilofficial08@gmail.com </p>
          <p>📱Phone: +91 9284850474</p>
          <div className={styles.icons}>
            <a href="https://github.com/SWAPY8" target="_blank">
              <img src="../src/assets/github_icon.png" alt="Github" />
            </a>
            <a
              href=" https://www.linkedin.com/in/swapnil-gandhale-206a46253"
              target="_blank"
            >
              <img src="../src/assets/linkedin_icon.png" alt="Linkedin" />
            </a>
            <a href="https://leetcode.com/u/6aFOFsFi6w/" target="_blank">
              <img src="../src/assets/leetcode_icon.png" alt="Leetcode" />
            </a>
            <a
              href="https://www.instagram.com/swapy348?igsh=MjIybmQzZ254NHl3"
              target="_blank"
            >
              <img src="../src/assets/insta_icon.jpeg" alt="Instagram" />
            </a>
          </div>
        </div>
        <div className={styles.connect_card2}>
          <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <h2>Connect with Me...</h2>
            <div className={styles.form_row}>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="2"
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
