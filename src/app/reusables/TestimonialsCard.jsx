function TestimonialsCard(props) {
  return (
    <div className="w-96">
      <div> {props.review}</div>
      <div>{props.name}</div>
    </div>
  );
}

export default TestimonialsCard;
