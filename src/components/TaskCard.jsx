import React from "react";
import "./TaskCard.css";
import Tag from "./Tag.jsx";
import deleteIcon from "../assets/delete_icon.png";

const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <div className="task_card">
      <p className="task_card_text">{title}</p>
      <div className="task_card_bottom">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected={true} />
          ))}
        </div>
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img className="delete_icon" src={deleteIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
