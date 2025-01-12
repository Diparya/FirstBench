export default function ResultDashboard() {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-gray-800 text-white py-4 mb-5 md:px-20 px-0">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <div className="text-2xl font-bold flex items-center cursor-pointer">
                        <img src="images/logo.png" alt="Firstbench" width={40} height={40} className="mr-2" />
                        Firstbench
                    </div>
                    <nav className="space-x-6 hidden md:flex">
                        <a href="#" className="hover:text-purple-400">Dashboard</a>
                        <a href="#" className="hover:text-purple-400">FirstGuru</a>
                        <a href="#" className="hover:text-purple-400">TownHall</a>
                        <a href="#" className="hover:text-purple-400">AI Evaluation</a>
                        <a href="#" className="hover:text-purple-400">Performance</a>
                        <a href="#" className="hover:text-purple-400">Mock Test</a>
                    </nav>
                    <div>
                        <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md text-white">
                            <p>Profile</p>
                            <img src="images/down-arrow.png" alt="down-arrow"  width={20} height={20}/>
                        </button>
                    </div>
                </div>
            </header>

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5 pb-3 md:px-24 px-0">
                <div className="grid grid-cols-1 lg:grid-cols-1 md:row-span-5 rounded-lg border border-gray-300 bg-violet-50 p-6 ml-5">
                    <div className="text-center mb-3 md:mb-0">
                        <img src="/images/work.svg" alt="Result" width={150} height={150} className="mx-auto" />
                        <h2 className="text-2xl font-bold text-violet-500 mt-4">Your Result!</h2>
                        <p className=" text-gray-400">All your insights & details in one place</p>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-300 p-5 space-y-4">
                        <div className="bg-violet-50 p-2 rounded-lg flex justify-between items-center">
                            <img src="images/cart.png" alt="cart" className="h-12 mr-2 rounded-md" />
                            <div>
                                <h3 className="text-[10px] bg-violet-500 rounded-lg p-1 text-center">You Passed</h3>
                                <p className="text-gray-400"><span className="font-semibold text-black text-lg mt-1">136</span> / 240</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-[10px] bg-green-600 text-white p-1 rounded-lg">76% </p>
                                <p className="text-green-600 text-[10px] mt-1">Accuracy</p>
                            </div>
                        </div>

                        <div className="bg-violet-50 p-2 rounded-lg">
                            <div className="flex">
                                <img
                                    src="images/profilepic.jpg"
                                    alt="Top Scorer"
                                    width={50}
                                    height={50}
                                    className="rounded-full"
                                />
                                <div className="ml-4">
                                    <p className="font-semibold text-gray-400">Top Score</p>
                                    <p className="text-gray-400"><span className="font-semibold text-black text-lg mt-1">230</span> / 240</p>
                                </div>
                            </div>
                            <div className="border border-t-gray-300 mt-2 mb-2" />
                            <div className="flex justify-between items-center">
                                <p className="text-gray-400 text-sm">By <span className="text-black font-semibold">Dipesh Arya</span></p>
                                <p className="text-[10px] bg-green-600 text-white p-1 rounded-lg ">92% Accuracy</p>

                            </div>
                        </div>

                        <div>
                            <h1 className="text-lg text-black font-semibold">Improve Your Marks</h1>
                            <p className="text-gray-400 text-sm">Improve your score by practicing more.</p>
                        </div>

                        <button className="bg-violet-500 hover:bg-purple-700 w-full text-white py-2 rounded-lg">Practice More</button>

                    </div>

                    <div className="bg-white rounded-lg border border-gray-300 flex flex-col justify-center items-center p-5 mt-5">
                        <div className="flex flex-col">
                            <h4 className="font-semibold text-lg text-black mb-2">Revisit Paper</h4>
                            <p className="text-sm text-gray-500">Challenge your friends by simply sharing a link to this test</p>
                        </div>
                        <button className="mt-5 bg-violet-500 hover:bg-purple-700 text-white px-16 py-2 rounded-lg">Visit</button>

                    </div>
                </div>

                <div className="hidden md:grid md:grid-cols-3 col-span-3 gap-5 text-gray-400">
                    <div className="h-64 bg-white rounded-lg border border-gray-300">
                        <p className="m-2">Compare Accuracy</p>
                    </div>
                    <div className="h-64 bg-white rounded-lg border border-gray-300">
                        <p className="m-2">Compare Accuracy</p>
                    </div>
                    <div className="h-64 bg-white rounded-lg border border-gray-300">
                        <p className="m-2">Compare Accuracy</p>
                    </div>
                </div>

                <div className="grid m-5 md:m-0 md:grid-cols-4 col-span-3 gap-5">
                    <div className="grid md:grid-cols-2 col-span-2 gap-3">
                        <div className="bg-white rounded-lg border border-gray-300 p-2">
                            <h3 className=" text-gray-400">Improvements</h3>
                            <h3 className="text-black text-sm mt-3 mb-2">Subject Understanding</h3>
                            <div className="flex items-center flex-wrap space-x-1 space-y-1">
                                <p className="bg-green-600 p-1 rounded-xl text-[11px]">Geography</p>
                                <p className="bg-yellow-600 p-1 rounded-xl text-[11px]">Politics</p>
                                <p className="bg-green-600 p-1 rounded-xl text-[11px]">Current Affairs</p>
                                <p className="bg-red-600 p-1 rounded-xl text-[11px]">General Studies</p>
                                <p className="bg-green-600 p-1 rounded-xl text-[11px]">Mathematics</p>
                                <p className="bg-gray-600 p-1 rounded-xl text-[11px]">Social Studies</p>
                                <p className="bg-red-600 p-1 rounded-xl text-[11px]">English Literature</p>
                                <p className="bg-yellow-600 p-1 rounded-xl text-[11px]">Indian History</p>
                                <p className="bg-green-600 p-1 rounded-xl text-[11px]">Economics</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg border border-gray-300 p-2">
                            <h3 className="text-gray-400">Response Time</h3>
                            <div className="flex flex-col space-y-3 mt-5">
                                <p className="bg-violet-500 p-1 text-white rounded-md w-fit text-[10px]">Std Time - 2min</p>
                                <div className="bg-violet-50 boder rounded-lg border-gray-500 flex justify-between items-center p-2">
                                    <p className="text-gray-500"><span className="text-3xl text-teal-500">60</span>% Ans took </p>
                                    <p className="text-violet-600"><span className="text-red-600 font-bold text-xl">↑</span> 2min</p>
                                </div>
                                <div className="border border-t-gray-300" />
                                <p className="text-black font-semibold text-xl mt-7 flex justify-center">You are <span className="text-red-600 ml-1 mr-1">slow </span>!</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 col-span-2 gap-3">
                        <div className="bg-white rounded-lg border border-gray-300 p-2">
                            <h3 className="text-gray-400">Approach Data</h3>
                            <div className="mt-4 space-y-2">
                                {[
                                    { label: 'Based on Facts', percentage: '25%' },
                                    { label: 'Based on Analysis', percentage: '32%' },
                                    { label: 'Based on Elimination', percentage: '19%' },
                                    { label: 'Based on Guess', percentage: '24%' },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center border space-x-2 border-gray-400 p-1 rounded-md">
                                        <p className="bg-violet-50 p-1 text-violet-500">{item.percentage}</p>
                                        <p className="text-black">{item.label}</p>

                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-lg border border-gray-300 p-2">
                            <h3 className="text-gray-400">Suggestions</h3>
                            <div className="mt-10 grid grid-cols-3 content-center gap-2">
                                {[
                                    { title: 'Q.1-12', label: 'Easy', time: '40sec' },
                                    { title: 'Q.1-12', label: 'Medium', time: '1.5min' },
                                    { title: 'Q.1-12', label: 'Hard', time: '3min' },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center justify-center space-y-2"
                                    >
                                        <p className="text-sm bg-violet-500 p-1 text-white rounded-md">{item.title}</p>
                                        <p className="bg-violet-50 boder rounded-lg border-gray-500 text-black font-semibold p-3">{item.time}</p>
                                        <p className={`
                                             ${item.label === 'Easy' ? 'text-green-500' : ''} 
                                            ${item.label === 'Medium' ? 'text-yellow-500' : ''} 
                                             ${item.label === 'Hard' ? 'text-red-500' : ''}
        `                               }>{item.label}</p>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="grid md:grid-cols-2 col-span-3 gap-5 m-5 md:m-0">
                    <div className="bg-white rounded-lg border border-gray-300 p-2">
                        <h3 className="text-gray-400">Compare Accuracy</h3>
                        <img src="images/01.png" alt="graph" />
                    </div>

                    <div className=" bg-white rounded-lg border border-gray-300 p-2">
                        <h3 className="text-gray-400">Time Taken</h3>
                        <img src="images/02.png" alt="graph" />
                    </div>
                </div>
            </div>
        </div >
    );
}
