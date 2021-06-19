export default function CompleteButton({ id, handleClick }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      data-testid={`button-${id}`}
    >
      완료
    </button>
  );
}
