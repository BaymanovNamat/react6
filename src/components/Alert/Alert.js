function Alert(props) {

  const buttonCallback = (event) => {
    alert("hello world");
  };

  const inputCallback = (event) => {
    alert(buttonCallback.value);
  };



  return (
    <div className="Alert">
      <button onClick={buttonCallback}> 
        Alert
      </button>

      <div>
        <input type="text" onChange={inputCallback}/>
      </div>
    </div>
  );
}

export default Alert;