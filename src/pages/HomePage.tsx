
const HomePage = () => {
  return (
    <div className="bg-gray-900">
    <div className="text-gray-300 bg-gray-900 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
    <div className="flex justify-between">
      <h1 className="font-serif text-3xl font-medium">ChatSphere</h1>
      <a href="/joinroom"
        className="self-start px-3 py-2 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black">
        join Room
      </a>
    </div>

    <div className="h-32 md:h-40"></div>
 
    <p className="font-sans text-4xl font-bold text-gray-200 max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl">
      Connect and chat in real-time
    </p>
    <div className="h-10"></div>
    <p className="max-w-2xl font-serif text-xl text-gray-400 md:text-2xl">
      ChatSphere allows you to connect with friends, family, and colleagues in real-time. Say goodbye to delayed conversations and hello to instant communication.
    </p>

    <div className="h-32 md:h-40"></div>

    <div className="grid gap-8 md:grid-cols-2">
      <div className="flex flex-col justify-center">
        <p
          className="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
          Real-time messaging
        </p>
        <h2 className="text-4xl font-bold">Instantaneous Communication</h2>
        <div className="h-6"></div>
        <p className="font-serif text-xl text-gray-400 md:pr-10">
          ChatSphere ensures your messages are delivered instantly, allowing for seamless conversations with your contacts.
        </p>
        <div className="h-8"></div>
        <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-800">
          <div>
            <p className="font-semibold text-gray-400">Secure and Reliable</p>
            <div className="h-4"></div> 
            <p className="font-serif text-gray-400">
              Your conversations are encrypted and secure, providing you with peace of mind.
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-400">User-Friendly Interface</p>
            <div className="h-4"></div>
            <p className="font-serif text-gray-400">
              ChatSphere's intuitive design makes it easy for users of all levels to navigate and use effectively.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-900 to-black h-96"></div>
      </div>
    </div>

    <div className="h-32 md:h-40"></div>

    <p className="font-serif text-4xl">
      <span className="text-gray-400">Stay Connected Anywhere</span>

      <span className="text-gray-600">
        Whether you're at home, work, or on the go, ChatSphere keeps you connected with your contacts wherever you are.
      </span>
    </p>

    <div className="h-32 md:h-40"></div>

    <div className="grid gap-4 md:grid-cols-4 bg-slate-850-900">
      <ul className="space-y-1 text-gray-400">
        <li className="pb-4 font-serif text-gray-400">Social networks</li>
        <li>
          <a href="https://twitter.com/chatsphere" className="hover:underline">Twitter</a>
        </li>
        <li>
          <a href="#" className="hover:underline">Facebook</a>
        </li>
      </ul>
      <ul className="space-y-1 text-gray-400">
        <li className="pb-4 font-serif text-gray-400">Locations</li>
        <li>
          <a href="#" className="hover:underline">New York</a>
        </li>
        <li>
          <a href="#" className="hover:underline">London</a>
        </li>
        <li>
          <a href="#" className="hover:underline">Tokyo</a>
        </li>
      </ul>
      <ul className="space-y-1 text-gray-400">
        <li className="pb-4 font-serif text-gray-400">Company</li>
        <li>
          <a href="#" className="hover:underline">About us</a>
        </li>
        <li>
          <a href="#" className="hover:underline">Contact us</a>
        </li>
      </ul>
      <ul className="space-y-1 text-gray-400 ">
        <li className="pb-4 font-serif text-gray-400">Join</li>
        <li>
          <a href="https://github.com/gary149/chatsphere"
            className="self-start px-3 py-2 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black">
            Get ChatSphere
          </a>
        </li>
      </ul>
    </div>
    <div className="h-12"></div>
  </div></div>
    
    
  );
}

export default HomePage