import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Emily Johnson",
      text: "They built my dream home with precision and flair!",
      img: "https://s3-alpha-sig.figma.com/img/85de/e66d/e0f9522e41537210d12edc690cd1dbe7?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MvBvQlkcc8WwR~NfeEmgp8nXNZG8~8mmXx3gOvBq0SPi9WjzRCvI6t64CWDc-1WOwKnHnILdY6bASPe6wsfgSbBM66f8j9DYjvwzbyYu~2oMqPpuNsOJ2JRIm~9OiVd-QW~Ie-kbnsRYYMu6JIIKHfzY0lxdndxBZL6-nwmJF-oVL96i8XD8v3Z-Pm3wtqUO2L1uaVFuhRDvrlTcaPfa07jEWVI3YB6a0g8alnEV0VYsH8a~xi3g1Hz2sjJjDR6IUFqzgQtsXj5waxmbGig7xFtWVqRwMaWcwXilw0InnVzd6Tv43kKxuc5RDU1Bb-OydHCbphmU65JwxWPIULwR8g__",
    },
    {
      name: "Michael Smith",
      text: "A construction company that actually delivers on promises!",
      img: "https://s3-alpha-sig.figma.com/img/c8bc/d7b7/2ccc9b7c38091273fe1e3cc52dc209b2?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rQDT6x2oO5Df4borMz01x1qNvf4GJgz5rGzHo1CJmabhck8TpKPrlOH502VS4g~1~QNpFv2lZNX9tInpJYquOhruxPF-vXySyEHCChCNLHVZjv2VlW8OsSP2hH88ciOROlt~08SIqCWQvVsw2e54I60GCK4~NW2po8phFEgcAt8nnEaU7unWsIaUxOdHoH0uQdNK7SKvzByFatmcUxwgt5gfJO7ZdP4sKczLzUj09kIrbDcVokLR5a35ocZCv9XUoM17Z~kLEGh9N1n1sve1iA2teWCiSrfelMUBrIEMIgjJyP5AYHTqjuLhXjV9qYvXjIxHnKCcKj5Azg6cIupoJQ__",
    },
    {
      name: "Sarah Brown",
      text: "Their team is like a well-oiled machine—impressive!",
      img: "https://s3-alpha-sig.figma.com/img/32c0/7087/a3fee66c829d1f1c8866d84a6bee6119?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Az9wzCoVRTBE-69LNWcDdhe0wM0eCQNlqO4McU~WHeivKG2M-6B9kZh5MpZ3I3TmmkyW5eXt6AlIFyXV-tEK8WYJFsKsu0Egw8YNv-TYg302TkL-2M0LWdGTxz4DsLZOBzJw0a33Dmu8yRaFcfED4CMS7ryrADubyHcDXhKNeLJRlq17IH-JNUNpozNwEFj8nLmg~Tny32MXK7z1fJeoVnSJwYNT-PiOt2h7Tq7Jb7F7EAAQWCXVKn0BJXtbA7an33rIKAYjQNFBuCC2wzTvj0MnLvculR5BsT9VLOOo3YEWT4Y9Fv3z5q-Dqip5F8EATSL6yA~bDuADCusapKycBA__",
    },
    {
      name: "David Wilson",
      text: "I never knew construction could be this fun!",
      img: "https://s3-alpha-sig.figma.com/img/be10/c0f7/f358882a5b8cc104cad327f33f47f204?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=S88GeUihWWfIrzEc0WR4oqq5cZ9BY9h6BU2a1yDvBb3c0~5XFuwX4YXHkNPjTG3sRuheRf2SBzhhyY-8WeODq-L5aWW5f2K2da0LyAq1NwZFv4HjIUzwtbJmivmoP-RZOV63OiuNXsU~8sUW1jxLkQEz-RvmtquDzYNVadIilEcR-MmXTDk9EN3Lvw9-dk6qad2B8iWeb9wufQJIN14NUf~-6WjSF0WJR43koDbF3T7ostiEZF1YNE5hrh6Uu45c9YxfqFV~3XM3R5YUvBoBskXlgly7SRZOE-iP3ZrKKlAHnn00chce7fsZpz4VIEcn1EbG9TM-Ul5ANieqHOIV8Q__",
    },
    {
      name: "Jessica Taylor",
      text: "They turned my chaotic ideas into a stunning reality!",
      img: "https://s3-alpha-sig.figma.com/img/ac42/6818/aac7a8e520b86cca55726eb0e5d265bc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GP-Xce2j8~G5efa3oBUbMgEj-q3olOlaKhctmqZXGRh1wRtbh7j2wWSBCYFOa229B5OUZUDF0fiB9-JUk3Ozhgs54efrY1HY9NbrlFTVXPosMtjoudXIQNEABkEFjLzc5MSUUqbfpII2w~rp6MLl-TXLbmtdnm0GQZmUmVZ-yFlLJz-UKq64zpN2vGYvJmCfsqZwjJ25LBUl1VGRFx3NWh9HqoTQbUQ-hbEBxxKfWJjlxAwAeexuvXYb16i6NQ8ScRhQ8~5wEfAIV2OrYp0U1B1Uk3shQJAVqYOG2nOeQlKHH8bDyIiA5ndTBhBZZEBoYC7KJYpiDLAugQdRMh2EXg__",
    },
    {
      name: "Chris Lee",
      text: "Professional, punctual, and downright awesome!",
      img: "https://s3-alpha-sig.figma.com/img/3939/8caf/705ea83928805f1f10d4978c3c836a93?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m6UiyVrt8d8vXu1H80xlrw8GhLrMe3OxnhA29c9roo3rPwxHMlmllOAvPmzmS7uSCcLSd4847KL~q~14ASiP~euyBFIDtgUnrmhi2SSwnI8ez3NbrWNOT3IVzygzPLsRJleuID3OHs7w48i9Y9-2b~AXvxX0um6XF0Prqb-i~Dl2nndUboVD60hF-Kzir~kl0b5RcIizdNBwu3Edvxe~FEFID~8L8lVZFzM2gUQCvQ06jg0Qfk9Mk5eHP8MMK-lJtYc3bcN4vwHwajo5qseE4iSxRQV95mRBjl2g~4FEtaeuZjTdhpSmczW7iuwSQL4jG64ugavmn5WBGirI3rAOKw__",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-black">{testimonial.text}</p>
            <div className="flex items-center mt-4">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="h-10 w-10 rounded-full mr-3"
              />
              <span className="font-semibold text-gray-900">
                {testimonial.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
