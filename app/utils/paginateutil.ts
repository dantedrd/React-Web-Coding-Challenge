export function paginateUtil(totalItem,currentPage,pageSize,maxPages){
    const totalPages=Math.ceil(totalItem/pageSize);
    if(currentPage<1){
        currentPage=1;
    }else{
        currentPage=totalPages;
    }

    let startPage;
    let endPage;

    if(totalPages<=maxPages){
        startPage=1;
        endPage=totalPages;
    }else {
       const maxPagesBeforeCurrentPage=Math.floor(maxPages/2);
       const maxPagesAfterCurrentPage=Math.floor(maxPages/2)-1;
       if(currentPage<=maxPagesBeforeCurrentPage){
        startPage=1;
        endPage=maxPages; 
       }else if(currentPage+maxPagesAfterCurrentPage>=totalPages){
            startPage=totalPages+maxPages+1;
            endPage=totalPages;
       }else{
           startPage=currentPage-maxPagesBeforeCurrentPage;
           endPage=currentPage+maxPagesAfterCurrentPage;
       }
    }
    const startIndex=(currentPage-1)*pageSize;
    const endIndex=Math.min(startIndex+pageSize-1,totalItem-1);

    const pages=Array.from(Array((endPage+1)-startPage).keys()).map(i=>startPage+i)

    return{
        totalItem,
        currentPage,
        totalPages,
        startPage,
        endPage,
        startIndex,
        endIndex,
        pages
    }

}