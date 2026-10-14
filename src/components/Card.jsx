import React from "react"

function Card({ username, btnText = "View Profile" }) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
            <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl transition duration-300 hover:-translate-y-2">

                <img
                    src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=700"
                    alt="Mountain landscape"
                    className="h-44 w-full object-cover"
                />

                <div className="p-6">
                    <div className="mb-5 flex items-center gap-4">
                        <img
                            src="https://i.pravatar.cc/150?img=12"
                            alt="Alex Morgan"
                            className="h-16 w-16 rounded-full object-cover ring-4 ring-blue-100"
                        />

                        <div>
                            <h2 className="text-xl font-bold text-gray-900">
                                {username}
                            </h2>
                            <p className="text-sm text-gray-500">
                                Frontend Developer
                            </p>
                        </div>
                    </div>

                    <p className="mb-5 text-sm leading-6 text-gray-600">
                        Creating beautiful web experiences with React,
                        JavaScript and modern UI design.
                    </p>

                    <div className="mb-6 flex flex-wrap gap-2">
                        <span className="rounded-lg bg-blue-100 px-3 py-2 text-xs font-semibold text-blue-700">
                            React
                        </span>
                        <span className="rounded-lg bg-yellow-100 px-3 py-2 text-xs font-semibold text-yellow-700">
                            JavaScript
                        </span>
                        <span className="rounded-lg bg-green-100 px-3 py-2 text-xs font-semibold text-green-700">
                            Tailwind CSS
                        </span>
                    </div>

                    <button
                        onClick={() => alert("Welcome to my profile!")}
                        className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
                    >
                        {btnText}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
