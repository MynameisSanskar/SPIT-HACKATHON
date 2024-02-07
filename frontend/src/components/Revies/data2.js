import img1 from "../../asssets/profile1.avif"
import img2 from "../../asssets/profile2.jpeg"
import img3 from "../../asssets/profile3.jpeg"
import img4 from "../../asssets/profile4.avif"

const people = [
  {
    id: 1,
    stars:3,
    image: img1,
    name:'john doe' ,
    title: 'office manager',
    quote:
      'The real estate team at [Website Name] made my home-buying journey incredibly smooth. From property search to closing the deal, their professionalism and dedication were commendable. I highly recommend their services for a stress-free real estate experience.',
  },
  {
    id: 2,
    stars:4,
    image: img2,
    name: 'maria ferguson',
    title: 'regular guy',
    quote:
      'The responsiveness and knowledge of the agents at [Website Name] stood out to me. They promptly addressed all my queries, provided valuable insights into the local market, and guided me through every step of the home-buying process. A trustworthy team indeed!',
  },
  {
    id: 3,
    stars:1,
    image: img3,
    name: 'susan jacobs',
    title: 'product designer',
    quote:
      'Renting through [Website Name] was a breeze. The user-friendly interface allowed me to browse listings easily, and the communication with the property management team was efficient. I appreciate the transparency and professionalism demonstrated throughout the rental process.',
  },
  {
    id: 4,
    stars:5,
    image: img4,
    name: 'peter smith',
    title: 'the boss',
    quote:
      'The customer service at [Website Name] exceeded my expectations. The staff was not only knowledgeable but also genuinely invested in helping me find the right property. Their commitment to customer satisfaction sets them apart in the real estate industry. Highly recommended',
  },
];

export default people;
