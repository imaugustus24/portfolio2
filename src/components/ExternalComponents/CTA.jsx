import React from "react";
import resumePdf from './AugustusRes.pdf';

function downloadResume() {
  const link = document.createElement('a');
  link.href = resumePdf;
  link.download = 'AugutusRes.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={() => false}
        onClick={() => {
          Notification.requestPermission().then((perm) => {
            if (perm === "granted") {
              new Notification("Aarab's Portfolio", {
                body: "Seems like you are looking for my CV but unfortunately I don't have one yet. I will update this section as soon as I have one. Thank you hope you enjoy my portfolio.",
                icon: "https://raw.githubusercontent.com/losier/v4/master/src/assets/Logo/android-chrome-512x512.png",
                image:
                  "https://raw.githubusercontent.com/losier/v4/master/src/assets/othersPics/logo.png",
                vibrate: true,
                timestamp: true,
                tag: "Aarab's Portfolio",
              });
            } else {
              alert(
                "Seems like we don't have access to send notifications. So i we just wanted to let you know that I don't have a CV yet. I will update this section as soon as I have one. Thank you hope you enjoy my portfolio."
              );
            }
          });
        }}
        className="btn"
      >
    <p className="btn" onClick={downloadResume} style={{ textDecoration: 'none' }}>
    Download CV
    </p>

      </a>

      <a href={"#contact"} className="btn btn-primary">
        Say, Hello...
      </a>
    </div>
  );
};

export default CTA;
<button onClick={downloadResume}>Download CV</button>
