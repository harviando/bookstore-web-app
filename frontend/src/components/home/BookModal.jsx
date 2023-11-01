/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center item-center"
    onClick={onClose}
    >
        <div
            onClick={(event) => event.stopPropagation()}
            className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
            >
                <AiOutlineClose
                    className="absolute right-6 top-6 text-red-600 cursor-pointer"
                    onClick={onClose}
                />

                <h2 className="w-fit py-1 bg-red-300 rounded-lg">
                    {book.publishYear}
                </h2>
                <h4 className="my-2 text-gray-500">{book._id}</h4>
                <div className="flex justify-start items-center gap-x-2">
                    <PiBookOpenTextLight className="text-red-300 text-2xl" />
                    <h2 className="my-1">{book.title}</h2>
                </div>
                <div className="flex justify-start items-center gap-x-2">
                    <BiUserCircle className="text-red-300 text-2xl" />
                    <h2 className="my-1">{book.author}</h2>
                </div>
                <p className="mt-4">The Book Subtitle</p>
                <p className="mt-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat iste explicabo quia deleniti nemo deserunt minus quod nam inventore repudiandae error expedita, voluptatibus earum quo quibusdam impedit ipsa magnam laboriosam!
                    Est, enim qui dicta nulla nostrum praesentium laudantium aliquam id libero mollitia sapiente ducimus, iusto aspernatur unde fugiat optio cum nihil fuga a iure officiis accusantium tempore? Explicabo, alias aut!
                    Deleniti veniam nam eius inventore quo. Rerum error eos esse minima nulla iure nostrum minus, quidem dignissimos! Fuga asperiores quaerat in odit rerum accusantium consequatur alias repellendus illo. Sed, debitis.
                    Fuga quaerat nesciunt adipisci! Voluptatibus, ipsa. Ipsa eius ad quod ipsam, nesciunt accusantium ex est, a rerum laudantium, facere ut repudiandae culpa! Porro accusamus, ex sapiente neque ducimus magni possimus?
                    Veniam suscipit magni inventore dicta, at deserunt autem! Porro dolorem veniam commodi expedita inventore ipsa pariatur, at, recusandae aspernatur non nihil repellendus reprehenderit esse? Minus commodi aperiam quod doloribus minima?
                </p>

            </div>
    </div>
  )
}

export default BookModal