import S from '@material-ui/lab/Skeleton';
export default function Skeleton() {
    return (
        <>
            <S animation="wave" height='4rem' width='40%' />
            <S animation="wave" height='2rem' width='50%' />
        </>
    )
}