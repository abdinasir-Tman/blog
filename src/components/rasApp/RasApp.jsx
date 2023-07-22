import DataDisplay from "./DataDisplay";

export default function RasApp() {
  const data = [
    {
      id: 1,
      image:
        "	https://www.sharafdin.com/wp-content/uploads/2022/03/cropped-20210603_21054356.png",
      title: "RAS App",
      desc: "Develop your restaurant with RAS.",
      link: "Learn more >",
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/id/1443305526/photo/young-smiling-man-in-headphones-typing-on-laptop-keyboard.webp?b=1&s=170667a&w=0&k=20&c=tLmgEUrp9MgRwnKaJjRgN3ID0X7b-MFTjueVLKLvQdo=",
      title: "Study At Sharafdiin",
      desc: `Study from Sharafdin. \n gain new skills from our skillful courses.`,
      link: "Learn more >",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/174784228/photo/autumn-beauty.jpg?s=612x612&w=0&k=20&c=X5aMFfYExrw9CTFb6rESCkP8R4ctBog5KOzcJJ6DSwM=",
      title: "SomGraphy",
      desc: `Take beautiful photos your children`,
      link: "Learn more >",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1588597989061-b60ad0eefdbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      title: "Som live Stock",
      desc: `Eat halal and health meat. \n
get it anytime anywhere.`,
      link: "Learn more >",
    },
  ];
  const cardContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gridGap: "20px",
    padding: "50px 7%",
    minHeight: "500px",
  };
  return (
    <div style={cardContainer} id="rasApp">
      {data.map((card) => (
        <DataDisplay key={card.id} card={card} />
      ))}
    </div>
  );
}
