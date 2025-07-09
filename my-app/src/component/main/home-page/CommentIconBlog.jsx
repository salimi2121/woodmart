import { RxChatBubble } from "react-icons/rx";
import 'bootstrap/dist/css/bootstrap.min.css';

const CommentIconBlog = ({ commentCount }) => {
  return (
    <div className="position-relative d-flex align-items-center gap-1" style={{ cursor: 'pointer' }}>
      <RxChatBubble className="text-muted" />
      <span className="position-absolute d-flex justify-content-center align-items-center count-comment f-vazir-fanum badge text-white rounded-circle">{commentCount}</span>
    </div>
  );
};

export default CommentIconBlog;