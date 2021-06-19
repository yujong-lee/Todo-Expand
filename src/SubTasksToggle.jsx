export default function SubTasksToggle({
  taskId, isOpen, onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-testid={`button-${taskId}`}
    >
      {(isOpen) ? '접기' : '펼치기'}
    </button>
  );
}
