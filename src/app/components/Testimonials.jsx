import TestimonialsCard from "../reusables/TestimonialsCard";

function Testimonials() {
  const customer = [
    {
      id: 1,
      image: "url",
      name: "Bijay Maharjan (Founder) Prism Studio",
      review:
        "I am very happy with the work of Ismartmandu. Social Media Management is quite economic and effective. Start-up businesses like mine should coordinate and work with the company once. And I mean it.",
    },
    {
      id: 2,
      image: "url",
      name: "Rabindrindra Raut (CEO) Thead and Arts",
      review:
        "Thread Arts Nepal created a big buzz in the market in the initial phase only. All thanks to the young and dynamic team of Ismartmandu for doing an impactful digital marketing",
    },
    {
      id: 3,
      image: "url",
      name: "SWC PHD",
      review:
        "Working with iSmartmandu made me into good choice. Not only as Digital Partner. It has been backbone since we have done digitally marketing.",
    },
  ];
  return (
    <div className="bg-slate-100 h-screen text-black grid place-items-center">
      <span className="text-3xl mb-5">Happy Clients</span>
      This is Testimonials
      {customer.map((content) => (
        <TestimonialsCard
          key={content.id}
          name={content.name}
          review={content.review}
        />
      ))}
    </div>
  );
}

export default Testimonials;
