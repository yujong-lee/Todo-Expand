export default function SubTasksToggle({
  taskId, isOpen, isEmpty, onClick,
}) {
  const buttonName = () => {
    if (isEmpty) {
      return '완료';
    }

    return (isOpen) ? '접기' : '펼치기';
  };

  return (
    <button
      type="button"
      onClick={onClick}
      data-testid={`button-${taskId}`}
    >
      {buttonName()}
    </button>
  );
}
