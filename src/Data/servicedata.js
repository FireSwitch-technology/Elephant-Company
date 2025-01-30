const servicedata = [
  {
    id: 1,
    link: "#",
    name: "Home Renovations",
    image:
      "https://s3-alpha-sig.figma.com/img/8fb1/cfee/910191edb7f87a9412b6f98b6aa1e19d?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D-XZXLqPrsOHbE9ylTEORKaLVzHNrginZrnzVWI1~Qi82IsH6YmveOIcgxcy6w3NNb1iw4L5USUvyGem5sXKqXXopK0Gemfzws~05WGC2J~ms7byjPp01Y432UJtwb4dSpUj0cnM1gGvCrnnwz6BL4hY3FyszQqEcJsblBSEoLUc9Dw-xNHbRyer1IPJLGyNsVrLUiI~Jcjc3hx84~wfBU~4AzKbafiVLpSV3R0Gh~GWceOndi1qOZZ4uZDBmbOYxBKGjx3AK6X7GleL~wACfh4jb6L4S-sC-s9BqEm1DQYPx2FnUE35mP~yHtX2nit4t8PnXfz25mNyZ5C5UMEVLQ__",
  },
  {
    id: 2,
    link: "#",
    name: "Interior & Exterior Painting",
    image:
      "https://s3-alpha-sig.figma.com/img/e4ca/6c9d/72fbc7a869266bdb36898593279ed1a2?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=le6ssAA4~bHe~7ayj8uH7vU~dvCDuE4cdFJg5gjQH~qa6bhBam2Y32KFdPHLPkd4Vvg4N0nSQoLV7i4qb3XCvZm03dW33VwwXzrbf2Tp3afPyxRvB7hO0HiXJTML7NmAKlp7K3DJLve1KBWVjM7nXwnIIH6q3QQnP-hbyL7pXbCdQ4U99dkjWV8Xoeuhy8h8lYxZSZxWHiIW4~7unI~vUaYsYtE1rjN7nKr7L7HDq9PLKtLf07luQacnzXRt~BD2357hhmDSVOnL4On~w66knH48B412KezMoYyz3pp70YHJYFzjAeSpwAUE3EQgJ-BUr~9GQF9qasE8wFTVD8YxnQ__",
  },
  {
    id: 3,
    link: "#",
    name: "Flooring Installation",
    image:
      "https://s3-alpha-sig.figma.com/img/48ba/b906/82c827c6bc5ef80a75f581060fc0f3fb?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ecH~-oVrDWMQaALSD3xgTCMGXZpFuy7ZQatHbKp5fH~Q9QckWOk1UGCaFyQ90WMZ~1ZgdEHWNLwURPeFvbyztc2vkYGBiASfm0fLXKH8LUgoug18rT3cx4FCVZl2gTkJgDvt6fK3ZPPbGig9m5L0GPgq8puJzSDFWKsozgEjUTyHSaDE-vskQjngpwim1fG9Ga4IQKTH8NGA6ISX6dXbGZmzG0okcAtCPaelyuFC5EZMRSD6NO~5r5o22ipeBpmR5DFi0VCgp6TDGlI9MVHUC52VrTRJJq0okSrvQhccArKtu0xw-eOfIksAqZyt1uOwkCBr0idHseu~wEQ4qqfkUw__",
  },
  {
    id: 4,
    link: "#",
    name: "Commercial Renovations",
    image:
      "https://s3-alpha-sig.figma.com/img/7c8c/99c6/7866325f72eca91d76abf58a1f1ec9a9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U7RAZH~ZfzSQzW9w2ZbUXYZVrC12A0l5oCt2VvfZNxe-Kgjb3lbWiawO2VxRY6e6qu6UzoO3E-FtOA5r0CQXuTpZBpOqijdMVxhrIXbvXHMJFeeTDCnffKg6qP1GbZzh-KkW5w4qZr~Zrb6foeN0Qy4MaceSNGguS0L-6njhEzpfHn6SipHL-g4ai9fCZElITuR3TJgPg2ABoRfS9SV9azrT0O7zMTp1RAIHKkf2cbD2iLO5Vv7lFNNfUWVTovSOngl1841yRCrgZilES47KsP4gi0OCRfqRrs3OeAwLmYfZwTkaCRjOgtL71YXEcRKWLUoyF8V3~8JG1ykFxbxbtg__",
  },
  {
    id: 5,
    link: "#",
    name: "Drywall & Plastering",
    image:
      "https://s3-alpha-sig.figma.com/img/acd9/f8b9/1ff25e31283249f29a6a35f831f42126?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FzUxxmz53Iz3YjPjWJqHA~ueqaG4zluUdv3ZIAW586Jb-1hVhkhZi6MtVFDAlTe8g~sSrR130GWs5obJADu~pXe2qLmMKid1ImXd0qAV4qFnuGXwOtX~wSmBADPJ2PO0-pUl7k7d7j-XllOk-bvITuCQcL1IgyCy2qgzOD7IY1a9tm6deZmirAlnVFmY0mhjJyxU~Pu-Cx5vts~ObU21cA0B9fDBI5DRslWJNRm5RbHeclVeyh5PM~VUvNZl3Nvn4NhwUpL6UHhw9L8Njki8fHJx5pkJCULtVlQO3M1lp3qEsfJJku5MUYy6MPu~dL8WIMvKvaDCrdRkDCTCAbhcxA__",
  },
];

export default servicedata;
