import { nanoid } from 'nanoid';

export default function CoachSeats() {
  function randomSeats() {
    const seats = [];
    function createSeats() {
      let z = 0;
      for (let i = 0; i < 64; i++) {
        seats.push({
          index: z,
          _id: nanoid(),
          avaliable: true,
        });
        z++;
      }
    }
    function getRandom(range, count) {
      //  range // максимальное значение (1..1000000 включительно)
      //  count // кол-во требуемых чисел
      let m = {};
      let a = [];
      for (let i = 0; i < count; ++i) {
        let r = Math.floor(Math.random() * (range - i));
        a.push((r in m ? m[r] : r) + 1);
        let l = range - i - 1;
        m[r] = l in m ? m[l] : l;
      }

      return a;
    }
    createSeats();
    const notAllowed = getRandom(seats.length - 1, 4);
    notAllowed.forEach((item) => (seats[item].avaliable = false));
    console.log(seats);
  }

  return (
    <div className="coach">
      <div className="coach__body"></div>
    </div>
  );
}
