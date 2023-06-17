import './login.css'
import img from './assets/imagens/icon_facebook.png'
import img2 from './assets/imagens/icon_gmail.png'

const Login = () => {
    return(
        <>
        <main>
          
          <div id='login'>
            <div className='container'>
              <form>
                <h2>Acesse sua conta</h2>
                <p>Novo cliente? Registre-se <a href="">aqui</a></p>
                <label htmlFor="username">Login *</label>
                <input type="email" id='username' placeholder='Insira seu login ou email'/>
                <label htmlFor="password">Senha *</label>
                <input type="password" id='password' placeholder='Insira sua senha'/>
                <a href="#">Esqueci minha senha</a>
                <button type="submit">Acessar conta</button>
                <div className='form-footer'>
                  <p>Ou faça login com</p>
                  <img src={img} alt="Facebook"></img>
                  <img src={img2} alt="Gmail"></img>
                </div>
              </form>
            </div>
          </div>
          
      </main>
        </>
    )
}

export default Login;