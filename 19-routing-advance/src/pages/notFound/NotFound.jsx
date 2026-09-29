import React from 'react'

const NotFound = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Glitch background */}
      <div className="pointer-events-none absolute inset-0 flex justify-center pt-[20%]">
        <div className="animate-glitch1 text-[80px] font-bold text-white opacity-0">
          error 404
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 flex justify-center pt-[20%]">
        <div className="animate-glitch2 text-[80px] font-bold text-white opacity-0">
          error 404
        </div>
      </div>


      {/* Main Content */}
      <div className="absolute left-[25%] top-[30%]">

        <div className="animate-glitch3 text-center font-mono text-white">

          <pre className="whitespace-pre-wrap text-left text-lg leading-7">

            <code>

              {/* DOCTYPE */}
              <span className="text-green-500">
                &lt;!
              </span>

              <span>
                DOCTYPE html
              </span>

              <span className="text-green-500">
                &gt;
              </span>

              {'\n'}

              {/* HTML */}
              <span className="text-orange-400">
                &lt;html&gt;
              </span>

              {'\n'}

              {/* STYLE */}
              <span className="text-orange-400">
                &lt;style&gt;
              </span>

              {'\n'}

              {'   '}
              * {'{'}

              {'\n'}

              {'       '}

              <span className="text-green-500">
                everything
              </span>

              :

              <span className="text-blue-400">
                awesome
              </span>

              ;

              {'\n'}

              {'   '}

              {'}'}

              {'\n'}

              <span className="text-orange-400">
                &lt;/style&gt;
              </span>

              {'\n'}

              {/* BODY */}
              <span className="text-orange-400">
                &lt;body&gt;
              </span>

              {'\n\n'}

              {/* ERROR */}
              <span className="text-white">
                ERROR 404!
              </span>

              {'\n'}

              <span className="text-white">
                FILE NOT FOUND!
              </span>

              {'\n\n'}

              {/* COMMENT */}
              <span className="text-gray-500">
                &lt;!--The file you are looking for,
                {'\n'}
                is not where you think it is.--&gt;
              </span>

              {'\n\n\n'}

              {/* Closing tags */}
              <span className="text-orange-400">
                &lt;/body&gt;
              </span>

              {'\n'}

              <span className="text-orange-400">
                &lt;/html&gt;
              </span>

            </code>

          </pre>

        </div>

      </div>


      {/* Animation CSS */}
      <style>
        {`
          @keyframes glitch1 {
            0%, 20%, 40%, 60%, 70%, 90% {
              opacity: 0;
            }

            10% {
              opacity: 0.1;
            }

            50% {
              opacity: 0.5;
              transform: translateX(-6px);
            }

            80% {
              opacity: 0.3;
            }

            100% {
              opacity: 0.6;
              transform: translateX(2px);
            }
          }

          @keyframes glitch2 {
            0%, 20%, 40%, 60%, 70%, 90% {
              opacity: 0;
            }

            10% {
              opacity: 0.1;
            }

            50% {
              opacity: 0.5;
              transform: translateX(6px);
            }

            80% {
              opacity: 0.3;
            }

            100% {
              opacity: 0.6;
              transform: translateX(-2px);
            }
          }

          @keyframes glitch3 {
            0%, 3%, 5%, 42%, 44%, 100% {
              opacity: 1;
              transform: scaleY(1);
            }

            4.3% {
              opacity: 1;
              transform: scaleY(4);
            }

            43% {
              opacity: 1;
              transform: scaleX(10) rotate(60deg);
            }
          }

          .animate-glitch1 {
            animation: glitch1 0.2s linear infinite;
          }

          .animate-glitch2 {
            animation: glitch2 0.2s linear infinite;
          }

          .animate-glitch3 {
            animation: glitch3 1s linear infinite;
          }
        `}
      </style>

    </div>
  )
}

export default NotFound