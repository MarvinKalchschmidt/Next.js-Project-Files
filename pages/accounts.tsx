import AccountImage from '@/components/AccountImage'

const Profiles = () => {
    const account1 = 'Marvin'
    const account2 = 'Vivi'
    const account3 = 'Caro'


    return (
        <div className=' sm:mt-36 mb-5 mx-18 sm:mx-36'>
            <div className='text-center m-20 text-2xl md:text-4xl'>Wer schaut gerade?</div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4' >
                <AccountImage name={account1} />
                <AccountImage name={account2} />
                <AccountImage name={account3} />
            </div>
        </div >

    )
}

export default Profiles