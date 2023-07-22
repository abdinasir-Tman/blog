import Element from "./Element";

const ForBusiness = () => {
  const data = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhcnRuZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      title: "Partner",
      desc: "“Would you like to become a partner with Sharafdin? You could either invest in us or share with us your dreams, which we could work together to turn into reality.”",
      link: "Learn more >",
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/id/1215481862/photo/teaching-students-during-isolation-period.webp?b=1&s=170667a&w=0&k=20&c=c6wKOtPOn3mqid5zlAEVsCuiG5R0hgszKft7KMc8jbE=",
      title: "Instructor",
      desc: `“Would you like to become an instructor at Sharafdin? You could teach more students who are studying at Sharafdin and gain both experience and income.”`,
      link: "Learn more >",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/580120812/photo/male-hiker-photographing-a-waterfall-in-forest.jpg?s=612x612&w=0&k=20&c=KCKiQem_durI7N3rcFRz3eiltYf5EwJbA_WbWLUI6TI=",
      title: "Photography",
      desc: `Are you interested in a career in photography? Join SomGraphy and gain experience and income as a photographer.`,
      link: "Learn more >",
    },
  ];
  return (
    <>
      <h1 style={{ marginLeft: "6%" }}>For Business</h1>
      <div
        style={{
          padding: "20px 6%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(500px,1fr))",
          gridGap: "20px",
        }}
      >
        {" "}
        {data.map((card) => (
          <Element key={card.id} card={card} />
        ))}
      </div>
    </>
  );
};

export default ForBusiness;
