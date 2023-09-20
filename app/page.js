import Image from 'next/image'
import AuthForm from './auth-form'

export default function Home() {
  return (
    <div className='flex flex-col justify-center h-screen'>
      <div className="row w-60 mx-auto">
        <div className="col-6">
          <h1 className="header text-4xl font-extrabold">Uber-Circle</h1>
          <p className="">
            Feel comfortable with a friend
          </p>
        </div>
        <div className="col-6 auth-widget">
          <AuthForm />
        </div>
      </div>
    </div>
  )
}