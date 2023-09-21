import Button from "../Elements/Button";

const FormLogin = () => {
  
    return (
        <form >         
          <a href="https://pharmadentstore.com">
          <Button ClassName="bg-transparent w-full font-semibold text-lg my-5" type="submit"
          >
            <div className="rounded-full h-12 w-12 flex items-center justify-center -ml-4 " >              
                <img src="/public/pharmadent.svg" alt="" />
            </div>
            Web Pharmadent
          </Button>
          </a>
          <a href="https://www.facebook.com/pharmadental.pharmadental">
          <Button ClassName="bg-transparent w-full font-semibold text-lg my-5" type="submit"
          >
            <div className="rounded-full h-12 w-12 flex items-center justify-center -ml-4 " >              
                <img src="/public/facebook.png" alt="" />
            </div>
            Facebook
          </Button>
          </a>
          <a href="https://www.tokopedia.com/pharmadent">
          <Button ClassName="bg-transparent w-full font-semibold text-lg my-5" type="submit"
          >
            <div className="rounded-full h-12 w-12 flex items-center justify-center -ml-4 " >              
                <img src="/public/Tokped.png" alt="" />
            </div>
            Tokopedia
          </Button>
          </a>
          
          <a href="https://shopee.co.id/shop/135955996">
          <Button ClassName="bg-transparent w-full font-semibold text-lg my-5" type="submit"
          >
            <div className="rounded-full h-12 w-12 flex items-center justify-center -ml-4 " >              
                <img src="/public/Shopee.png" alt="" />
            </div>
            Tokopedia
          </Button>
          </a>
          <a href="wa.me/6282191629191">
          <Button ClassName="bg-transparent w-full font-semibold text-lg my-5" type="submit"
          >
            <div className="rounded-full h-12 w-12 flex items-center justify-center -ml-4 " >              
                <img src="/public/WA.png" alt="" />
            </div>
            Tokopedia
          </Button>
          </a>
        </form>
    )
}

export default FormLogin;