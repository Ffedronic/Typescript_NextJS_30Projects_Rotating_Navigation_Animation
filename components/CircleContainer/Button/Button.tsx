interface ButtonProps {
  id: string;
  icon: string;
}
function toggleShowNav() {
  const container = document.querySelector(".container")!;  
  container.classList.toggle("show-nav")
}

function Button(props: ButtonProps) {
  const { id, icon} = props;

  return (
    <button onClick={toggleShowNav} id={id}>
      <i className={icon}></i>
    </button>
  );
}

export default Button;
