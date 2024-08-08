import React, { useEffect, useState } from "react";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ProgressBar from "./ProgressBar";

type LikeDislikeType = {
  initialLike: number;
  initialDislike: number;
};

const LikeDislike = ({ initialLike, initialDislike }: LikeDislikeType) => {
  const [like, setLike] = useState<number>(initialLike);
  const [dislike, setDislike] = useState<number>(initialDislike);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  useEffect(() => {
    setLike(initialLike);
    setDislike(initialDislike);
  }, [initialLike, initialDislike]);

  const handleLike = () => {
    if (liked) {
      setLike(like - 1);
      setLiked(false);
    } else {
      setLike(like + 1);
      setLiked(true);
      if (disliked) {
        setDislike(dislike - 1);
        setDisliked(false);
      }
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDislike(dislike - 1);
      setDisliked(false);
    } else {
      setDislike(dislike + 1);
      setDisliked(true);
      if (liked) {
        setLike(like - 1);
        setLiked(false);
      }
    }
  };

  const total = like + dislike;
  const likePercentage = total ? (like / total) * 100 : 0;
  const dislikePercentage = total ? (dislike / total) * 100 : 0;

  return (
    <div
    className="likeDislikeContainer"
    >
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <div
          onClick={handleLike}
          style={{ display: "flex", cursor: "pointer", alignItems: "center" }}
        >
          {liked ? <ThumbUpAltIcon /> : <ThumbUpAltOutlinedIcon />}
          {like}
        </div>
        <div>|</div>
        <div
          onClick={handleDislike}
          style={{ display: "flex", cursor: "pointer", alignItems: "center" }}
        >
          {disliked ? <ThumbDownAltIcon /> : <ThumbDownOffAltOutlinedIcon />}
          {dislike}
        </div>
      </div>
      <ProgressBar
        likePercentage={likePercentage}
        dislikePercentage={dislikePercentage}
      />
    </div>
  );
};

export default LikeDislike;
