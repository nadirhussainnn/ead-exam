//Pug include css and header
include ../public/css/styles.css
    body 
        include ./layouts/header.pug


//Pug table

table(style='width:100%, border:1')
                thead 
                    tr 
                        th Task#
                        th Description 
                        th Image 
                        th Actions 
                tbody 
                    each item, index in data
                        
                        tr 
                            td #{index+1}
                            td #{item.description}
                            -var img = item.image;
                            -var id=item._id
                            td 
                                img(src='/images/'+img alt='Loading image' style='width:100px') 
                            td 
                                a(href='/api/deleteItem?id='+id).del-link Delete 
                                a(href='/api/updateItem?id='+id).update-link Update