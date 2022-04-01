

function Paragraph(props) {

  const { size, color, children} = props;

  const styles = {
    fontSize: size,
    color: color,

  };

  return (
    <p style={styles} >
      {children}
    </p>
  );
}

export default Paragraph;