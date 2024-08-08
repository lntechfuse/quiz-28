"use client";

export default function Reply({ ImagePath, username, replyTitle, likes }) {
  return <div>your code for Reply component ...
    <div className="d-flex gap-2 my-2 ps-5">
          <img
            src={userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#ฺB2B2B2" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
             {username}
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>{replyText}</span>
            <div className="d-flex align-items-center gap-1">
              <img 
              disabled = {likeNum === 0 }
              src="/like.svg" width={20}>
              </img>
              <span
                style={{ color: "#B0B3B8" }}>
                {likeNum}
               </span>
            </div>
          </div>
        </div>
  </div>;
}
