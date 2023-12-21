
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';


function File() {
    const date = new Date();
    const [selectedDate, setSelectedDate] = useState(date);
    const [color, setColor] = useState("");
    const [selected, setSelected] = useState("");
    const [colors, setColors] = useState("");
    const [selecteds, setSelecteds] = useState("");
    const [qty, setQty] = useState("1");
    const [qtyColor, setQtyColor] = useState("black");
    const [qtySelect, setQtySelected] = useState("");
    const [words, setWords] = useState("");

    const handleClick = (id) => {
        setSelected(id);
        setColor("black");
    }

    const handleClick2 = (id) => {
        setSelecteds(id);
        setColors("black");
    }

    const handleQty = (id) => {
        setQtyColor("black");
        setQtySelected(id);
    }


    return (
        <div className='xl:w-[50%] lg:w-[50%] md:[w-75%] sm:w-[100%] fixed right-0 bg-white px-[40px] py-[20px] mt-[20px] mr-[20px] rounded-lg'>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-4 flex-wrap'>
                    <div className='bg-[#9376be] text-white rounded-[12px] px-[12px] py-[16px] text-[17px] cursor-pointer' onClick={() => handleClick(1)} style={selected == "1" ? { color: color } : { color: "white" }}>
                        <p>Academic writing</p>
                    </div>

                    <div className='bg-[#9376be] text-white rounded-[12px] px-[12px] py-[16px] text-[17px] cursor-pointer' onClick={() => handleClick(2)} style={selected == "2" ? { color: color } : { color: "white" }}>
                        <p>Editing and proofreading</p>
                    </div>

                    <div className='bg-[#9376be] text-white rounded-[12px] px-[12px] py-[16px] text-[17px] cursor-pointer' onClick={() => handleClick(3)} style={selected == "3" ? { color: color } : { color: "white" }}>
                        <p>Calculations</p>
                    </div>
                </div>

                <div className='flex gap-4 flex-wrap'>
                    <div className='bg-[#9376be] text-white rounded-[12px] px-[12px] py-[16px] text-[17px] cursor-pointer' onClick={() => handleClick2(4)} style={selecteds == "4" ? { color: colors } : { color: "white" }}>
                        <p>High School</p>
                    </div>

                    <div className='bg-[#9376be] text-white rounded-[12px] px-[12px] py-[16px] text-[17px] cursor-pointer' onClick={() => handleClick2(5)} style={selecteds == "5" ? { color: colors } : { color: "white" }}>
                        <p>Undergraduate</p>
                    </div>

                    <div className='bg-[#9376be] text-white rounded-[12px] px-[12px] py-[16px] text-[17px] cursor-pointer' onClick={() => handleClick2(6)} style={selecteds == "6" ? { color: colors } : { color: "white" }}>
                        <p>Bachelor</p>
                    </div>

                    <div className='bg-[#9376be] text-white rounded-[12px] px-[12px] py-[16px] text-[17px] cursor-pointer' onClick={() => handleClick2(7)} style={selecteds == "7" ? { color: colors } : { color: "white" }}>
                        <p>Professional</p>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="">Type of paper</label>
                    <select name="" id="" className='py-[10px] px-[5px] border border-gray-300 rounded-lg outline-none'>
                        <option value="">Research paper</option>
                        <option value="">Research proposal</option>
                        <option value="">Speech</option>
                        <option value="">Thesis</option>
                        <option value="">Thesis proposal</option>
                        <option value="">Thesis statement</option>
                    </select>
                </div>

                <div className='flex gap-2'>
                    <div>
                        <div>
                            <p>Quantity</p>
                            <input type="number" placeholder={qty} className='text-black px-[10px] border border-gray-300 rounded-lg outline-none' />
                        </div>

                        <div className='flex gap-4 mt-3'>
                            <div className='bg-[#9376be] text-white rounded-[12px] px-[25px] py-[5px] cursor-pointer' onClick={(e) => {handleQty("pages"); setWords(e.target.value * 275)}} style={qtySelect == "pages" ? { color: qtyColor } : { color: "white" }}>
                                <p>Pages</p>
                            </div>

                            <div className='bg-[#9376be] text-white rounded-[12px] px-[25px] py-[5px] cursor-pointer' onClick={() => handleQty("words")} style={qtySelect == "words" ? { color: qtyColor } : { color: "white" }}>
                                <p>Words</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p>Deadline</p>
                        <DatePicker selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}  className='border border-gray-300 rounded-lg px-[5px] outline-none' />
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div>
                        <p className='text-sm text-gray-400'>Approx. Price</p>
                        <h1 className='font-bold text-3xl'>$12</h1>
                    </div>

                    <div className=''>
                        <button className='bg-[#ffc966]  rounded-lg text-xl px-[20px] py-[18px] font-bold transition-all hover:scale-110'>Proceed to Order</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default File;
