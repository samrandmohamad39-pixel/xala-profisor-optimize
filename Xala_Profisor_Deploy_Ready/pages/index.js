
export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right,#050505,#13001f,#000)',
      color: 'white',
      fontFamily: 'Arial',
      padding: '40px'
    }}>

      <div style={{textAlign:'center',paddingTop:'40px'}}>
        <h1 style={{
          fontSize:'72px',
          color:'#00d9ff',
          marginBottom:'10px',
          textShadow:'0 0 30px #00d9ff'
        }}>
          XALA PROFISOR
        </h1>

        <p style={{
          fontSize:'24px',
          color:'#ccc'
        }}>
          Premium FiveM FPS Boost + Gaming Optimizer
        </p>

        <a href="https://discord.gg/xalaprofisor">
          <button style={{
            marginTop:'30px',
            padding:'18px 40px',
            fontSize:'22px',
            borderRadius:'15px',
            border:'none',
            background:'#00d9ff',
            color:'black',
            fontWeight:'bold',
            cursor:'pointer'
          }}>
            JOIN DISCORD
          </button>
        </a>
      </div>

      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',
        gap:'25px',
        marginTop:'80px'
      }}>

        {[
          'FiveM FPS BOOST',
          'Crash Cleaner',
          'GameLoop Optimize',
          'Upload System',
          'Discord Webhook',
          'Auto Update System'
        ].map((item,index)=>(
          <div key={index} style={{
            background:'rgba(255,255,255,0.05)',
            border:'1px solid rgba(0,217,255,0.3)',
            borderRadius:'25px',
            padding:'30px',
            backdropFilter:'blur(10px)'
          }}>
            <h2 style={{
              color:'#00d9ff'
            }}>
              {item}
            </h2>

            <p style={{
              color:'#ccc',
              lineHeight:'28px'
            }}>
              Professional gaming optimization system for better FPS and smoother gameplay.
            </p>
          </div>
        ))}
      </div>

      <div style={{
        textAlign:'center',
        marginTop:'100px'
      }}>
        <h2 style={{
          fontSize:'42px',
          color:'#fff'
        }}>
          DOWNLOAD XALA PROFISOR OPTIMIZER
        </h2>

        <button style={{
          marginTop:'25px',
          padding:'20px 50px',
          borderRadius:'20px',
          border:'none',
          fontSize:'24px',
          background:'linear-gradient(to right,#00d9ff,#a100ff)',
          color:'white',
          fontWeight:'bold',
          cursor:'pointer'
        }}>
          DOWNLOAD NOW
        </button>
      </div>

    </div>
  )
}
