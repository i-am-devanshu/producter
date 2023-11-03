export default function Pagination({ productPerPage, totalProducts, paginate }) {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
        pageNumber.push(i);
    }
    return (
        <>
            <nav>
                <ul class="inline-flex -space-x-px text-sm">
                    {pageNumber.map((page) => (
                        <li className="page">
                            <button onClick={()=> paginate(page)} class="flex items-center justify-center py-2 w-10 h-11 text-xl srounded-md leading-tight text-gray-500 bg-white border border-gray-300 ">{page}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )

}