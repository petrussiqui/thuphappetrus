import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useEffect } from 'react';
import { useState } from 'react';


const itemData = [
    {
        img: 'https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/293754387_423396716469656_1037785627538318145_n.jpg?stp=cp1_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jHSVF9z7vQkAX9yWK8A&tn=W67W2u7LmJHcXzOa&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT_f6LrTF8xaJY1-YOmPPPQWEvjdRb1SyuPhaDh159xFag&oe=631F5588',
        title: 'Kiên Nhẫn - Small Frame',
        type: 'frames',
    },
    {
        img: 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/141057033_1557831071069433_431959604984494231_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_ohc=P0OcYwBFU4YAX80tobv&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT_Zi3Vq_ORnmni659tvWbDXyjMArw6d4yUgFjTEf394Dg&oe=631EF943',
        title: 'Phúc - Medium Frame',
        type: 'frames',
    },
    {
        img: 'https://scontent.fsgn13-3.fna.fbcdn.net/v/t1.6435-9/138743886_1549479278571279_8570663789824303060_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_ohc=J4tka17RuDIAX8F24gQ&tn=W67W2u7LmJHcXzOa&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT9a2z0wuA2YwCjD6XnlvnYfY6-ihv9WNMzUdDwSgrAT_g&oe=63200D88',
        title: 'Vợ Chồng - Large Frame',
        type: 'frames',
    },
    {
        img: 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/104589352_1382753561910519_3961167128740892123_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=dXgik3djB0AAX_sDF7R&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT_clyTxd8i6dXd7838bpu54z0_1Be06XO3dhkpoSV7S4Q&oe=63204816',
        title: 'Catholic',
        type: 'frames',
    },
    {
        img: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/105337593_1385064578346084_7273445328019531631_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=-8yugxiR8UwAX-MQLtA&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT-vjfnS--51sCc4dHoMH6KegQ-QW9lEKYKU6EiK1ZoRWg&oe=632238C7',
        title: 'Catholic',
        type: 'frames',
    },
    {
        img: 'https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.6435-9/105484600_1385064661679409_4616960545194185729_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=qnPr0LpzC5YAX-cNLS2&_nc_ht=scontent.fsgn13-4.fna&oh=00_AT8L-B5N4jJR0pHaLAcnJ9eOuNZbmi9w8BMniRx_noSeXw&oe=63209B8C',
        title: 'Catholic',
        type: 'frames',
    },
    {
        img: 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/142738094_1557595497759657_2802458500362540729_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=kUEpcEfnbG4AX-AOBFH&tn=W67W2u7LmJHcXzOa&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT95MM69jGigSEkzsko2gzebT8tviY-EuDcXGIb1QyPeTQ&oe=6321B4C9',
        title: 'Catholic',
        type: 'papers',
    },
    {
        img: 'https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.6435-9/51142706_1001596956692850_8289081044972339200_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=fAT7hjutzhkAX9vrS5_&tn=W67W2u7LmJHcXzOa&_nc_ht=scontent.fsgn13-4.fna&oh=00_AT_4B7Ep0cX9cq8K0HSXi9_fudA4lbT5xKtaoHPfTqdDhw&oe=63226B9F',
        title: 'Cát Tường - Như Ý',
        type: 'papers',
    },
    {
        img: 'https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/272300755_1812589912260213_5243976231311823090_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_ohc=jm7ZSHXAuaoAX-S5FiC&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT_TG-PR5pEYIAHXs7pmEvmFAEJcKdERWiz9M2IjDj2NUA&oe=631E0612',
        title: 'Tâm',
        type: 'papers',
    },
    {
        img: 'https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/272279596_1812589975593540_2170495978280991746_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=K7yCIQpRXKAAX_K_XcV&tn=W67W2u7LmJHcXzOa&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT9EbssLTKqbEPjCZ2-vFtnNx1v_bVQL6oGbQkkkf1HTrA&oe=631F0804',
        title: 'Cha mẹ',
        type: 'papers',
    },
    {
        img: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/295096919_426515972824397_6426774860541614610_n.jpg?stp=cp1_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=rN1ggNfPVNwAX-D2rl7&tn=W67W2u7LmJHcXzOa&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT9DEN34-8RyRt_ZZoBoBaYLFrra0uJ3R2WPA6KOxRj8Pg&oe=631DD88E',
        title: 'Tin - Quy Nhơn pebble',
        type: 'pebbles',
    },
    {
        img: 'https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.6435-9/116000575_1412761008909774_8876030221729514067_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=X4CLmp79bqYAX9qnCCh&_nc_ht=scontent.fsgn13-4.fna&oh=00_AT8xriGxTENnpNiOHVrDnQzmkjwXHLYf3iE7t05lHnb5XA&oe=631FC902',
        title: 'Vô Tư - Cỗ Thạch pebble',
        type: 'pebbles',
    },

    {
        img: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/145395289_1563536643832209_6593035120495217250_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=1VrQNoQkTDEAX9TaXSc&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8Yo0YTwGEYDqCijw2imrAoLWlRuzqCS3cVkU87Gy-WmQ&oe=63218282',
        title: 'Phúc - Gourd',
        type: 'others',
    },
    {
        img: 'https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.6435-9/145527178_1563536713832202_209082974425590122_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=J1x3Nn2SrjYAX947dk0&tn=W67W2u7LmJHcXzOa&_nc_ht=scontent.fsgn13-4.fna&oh=00_AT8EsxV3csnB8I1JZPd7ab5YdS7ZeCiicY75xEaNOTDoEQ&oe=631EEEB4',
        title: 'Lộc - Gourd',
        type: 'others',
    },
    {
        img: 'https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.6435-9/51137433_1001605723358640_3028164789374287872_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=ofoisq-1NWYAX8DM4O9&_nc_ht=scontent.fsgn13-4.fna&oh=00_AT8mNEXe-EpK1WHmqakIhDt9PBMnE3AXUQDxscg7NAbMuQ&oe=63225A8F',
        title: 'Tài - Coconut',
        type: 'others',
    },
    {
        img: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/51535834_1001605766691969_3171323247715155968_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=FNrYKcdtaeAAX9nYmmK&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_PZN8Gey1rf0eQDA5Sm8GNM5cHhsO02S0sz9b9aDIrrA&oe=631EF166',
        title: 'Lộc - Coconut',
        type: 'others',
    },


];
function Gallery({ filter }) {
    const [dataFilter, setDataFilter] = useState(itemData)

    useEffect(() => {
        setDataFilter(filter === '' ? itemData :
            itemData.filter((item) => item.type === filter))
    }, [filter]);
    return (
        <ImageList sx={{ width: '100%' }} cols={4}>
                {dataFilter.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={item.img}
                            srcSet={item.img}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
        </ImageList>
    );
}

export default React.memo(Gallery)

