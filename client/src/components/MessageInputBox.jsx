const MessageInputBox = ({ value, onChange, onSubmit }) => {
  return (
    <div
      className="bg-light border-top d-flex align-items-center p-3"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
      }}
    >
      <input
        type="text"
        className="form-control me-2"
        placeholder="Type your message..."
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            onSubmit();
          }
        }}
      />
      <button className="btn btn-primary" onClick={onSubmit}>
        Send
      </button>
    </div>
  );
};

export default MessageInputBox;
