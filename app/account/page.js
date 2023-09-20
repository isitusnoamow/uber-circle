import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Account() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
      <div className='w-screen h-screen'>
            <div className="w-full h-full flex flex-col p-8">
                <div className="text-white">
                    <h1 className="text-3xl font-bold">Welcome Back!</h1>
                    <p className="text-xl font-medium">Find Drivers Nearby</p>
                </div>
                <div className={"outline outline-2 outline-white bg-black h-40 mt-3 p-4 rounded-md"}>
                    <h1 className="font-bold text-2xl">Driver Name</h1>
                    <p className='font-normal'>Current Relationship: Buddies</p>
                    <div>
                    <div className={"flex flex-row justify-start rounded-lg outline outline-2 my-1 outline-white"}>
                        <div className="w-20 h-10 bg-orange-600 rounded-l-lg outline outline-2 outline-white">
                            
                        </div>
                      </div>
                      <h1 className="text-white text-center py-1">Rides Until Next Level: 3</h1>
                  </div>
                </div>
                <div className={"outline outline-2 outline-white bg-black h-40 mt-4 p-4 rounded-md"}>
                    <h1 className="font-bold text-2xl">Driver Name</h1>
                    <p className='font-normal'>Current Relationship: Friends</p>
                    <div>
                    <div className={"flex flex-row justify-start rounded-lg outline outline-2 my-1 outline-white"}>
                        <div className="w-28 h-10 bg-red-600 rounded-l-lg outline outline-2 outline-white">
                            
                        </div>
                      </div>
                      <h1 className="text-white text-center py-1">Rides Until Next Level: 5</h1>
                  </div>
                </div>
                <div className={"outline outline-2 outline-white bg-black h-40 mt-4 p-4 rounded-md"}>
                    <h1 className="font-bold text-2xl">Driver Name</h1>
                    <p className='font-normal'>Current Relationship: Friends-To-Be</p>
                    <div>
                    <div className={"flex flex-row justify-start rounded-lg outline outline-2 my-1 outline-white"}>
                        <div className="w-36 h-10 bg-blue-600 rounded-l-lg outline outline-2 outline-white">
                            
                        </div>
                      </div>
                      <h1 className="text-white text-center py-1">Rides Until Next Level: 1</h1>
                  </div>
                </div>
                <div className={"outline-2 bg-green-500 h-40 mt-4 p-4 rounded-md"}>
                  <div className='flex flex-col justify-center h-full'>
                    <h1 className="text-center font-extrabold text-4xl text-white h-fit">Find someone NEW!</h1>
                  </div>
                </div>
            </div>
            
        </div>

  )
}