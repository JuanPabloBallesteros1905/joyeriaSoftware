




export function CustomSideBars() {

    return <>



        <main className="min-h-screen w-full bg-gray-100 text-gray-700" x-data="layout">

            <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">




                
            </header >

            <div className="flex">

                <aside className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2"
                    x-show="asideOpen">
                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                        <span className="text-2xl"><i className="bx bx-home"></i></span>
                        <span>Dashboard</span>
                    </a>

                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                        <span className="text-2xl"><i className="bx bx-cart"></i></span>
                        <span>Cart</span>
                    </a>

                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                        <span className="text-2xl"><i className="bx bx-shopping-bag"></i></span>
                        <span>Shopping</span>
                    </a>

                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                        <span className="text-2xl"><i className="bx bx-heart"></i></span>
                        <span>My Favourite</span>
                    </a>

                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                        <span className="text-2xl"><i className="bx bx-user"></i></span>
                        <span>Profile</span>
                    </a>
                </aside>


                {/* <div className="w-full p-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita quam odit officiis
                    magni doloribus ipsa dolore, dolores nihil accusantium labore, incidunt autem iure quae vitae voluptate,
                    esse asperiores aliquam repellat. Harum aliquid non officiis porro at cumque eaque inventore iure. Modi sunt
                    optio mollitia repellat sed ab quibusdam quos harum!</div> */}
            </div>
            
        </main >

        {/* <script>
    document.addEventListener("alpine:init", () => {
                Alpine.data("layout", () => ({
                    profileOpen: false,
                    asideOpen: true,
                }));
    });
        </script> */}
    </>

}


