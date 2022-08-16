import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useEffect } from 'react';
import { useState } from 'react';


const itemData = [
    {
        img: 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/293816723_423396283136366_4582093402213118153_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=_semfcSbFDYAX_i1PtI&tn=W67W2u7LmJHcXzOa&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT9myjuTKuCyZQyNYHv5A96SkufIN_2ri4aaefVtYw0b1g&oe=63006841',
        title: 'Nhẫn - Medium Frame',
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
        img: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/56400357_1035496356636243_3220175945201614848_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=LGo6WKVmRwgAX8zYw2p&tn=W67W2u7LmJHcXzOa&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_m-H3uVUKJW0312E-W8mnCdbJhD5Up2x0ySlF4nrLLlg&oe=631F9A01',
        title: 'Kiên Nhẫn - Small Frame',
        type: 'frames',
    },
    {
        img: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.6435-9/104290584_1382753355243873_8189766512424384416_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_ohc=etgSwj-1Fk8AX-PAxO5&tn=W67W2u7LmJHcXzOa&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8YXiuJ47w9BGrpL5Y06V8vIvVdiF1h2vpQfGBJttBKSw&oe=6321ABFE',
        title: 'Catholic',
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
        img: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/272384539_1812588218927049_5108454773371552851_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_ohc=Lbs1zIOht4MAX_uqSAs&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8P-79Vimg3En93fo3fr8IZB2LYTKOU38hMtWXBXdJpFA&oe=62FF7EE1',
        title: 'Catholic',
        type: 'papers',
    },
    {
        img: 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/142738094_1557595497759657_2802458500362540729_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=kUEpcEfnbG4AX-AOBFH&tn=W67W2u7LmJHcXzOa&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT95MM69jGigSEkzsko2gzebT8tviY-EuDcXGIb1QyPeTQ&oe=6321B4C9',
        title: 'Catholic',
        type: 'papers',
    },
    {
        img: 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/271664684_1803475253171679_7604334081987489477_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=akg5vv7WGrwAX9jyMor&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT9v_m4FtFUWQIbUmYXl2DsKbNNAr3uifTxVT0q3DNFxlA&oe=63001726',
        title: 'Giảm Cân',
        type: 'papers',
    },
    {
        img: 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/176150939_287567929708418_5020359352466659593_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Ljai-q02UiEAX_nsw_B&tn=W67W2u7LmJHcXzOa&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT-TwhT6eIkY03rzdBVWF9gcuh2jRkAFvIY4yesV8p7uQQ&oe=631F1127',
        title: 'Cha Mẹ',
        type: 'papers',
    },
    {
        img: 'https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.6435-9/51142706_1001596956692850_8289081044972339200_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=fAT7hjutzhkAX9vrS5_&tn=W67W2u7LmJHcXzOa&_nc_ht=scontent.fsgn13-4.fna&oh=00_AT_4B7Ep0cX9cq8K0HSXi9_fudA4lbT5xKtaoHPfTqdDhw&oe=63226B9F',
        title: 'Cát Tường - Như Ý',
        type: 'papers',
    },
    {
        img: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/295096919_426515972824397_6426774860541614610_n.jpg?stp=cp1_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=ssqJ9IWEB0gAX_dIudJ&tn=W67W2u7LmJHcXzOa&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT-6JQ2qAwoMr53--g2ft9w7qS1rEKJvi3mIwGHrR8b0Dg&oe=63002ECE',
        title: 'Tin - Quy Nhơn pebble',
        type: 'pebbles',
    },
    {
        img: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/295044296_426515986157729_5243398453668395925_n.jpg?stp=cp1_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=BpgO1C5AL38AX8MVKo4&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT81bLOTafcOd7K0IC6YtApBaJAMhMOAeGm6Lm3AQf_o9Q&oe=630046E9',
        title: 'Mến - Quy Nhơn pebble ',
        type: 'pebbles',
    },
    {
        img: 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/295283825_427132879429373_5070869939828349306_n.jpg?stp=cp1_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3uKNHjVgVsoAX8yrA-h&tn=W67W2u7LmJHcXzOa&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT-LRdl9OeBmyNQniiOCGAlmGzf9ZrxnF8tE_8BqQ2Eyww&oe=62FF9C23',
        title: 'An - Cỗ Thạch pebble',
        type: 'pebbles',
    },
    {
        img: 'https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/295416254_427132926096035_9086107019128874855_n.jpg?stp=cp1_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FGEob4BOX6oAX9WnZHD&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT9c7tRzaGG2oPQ7mSYMSR4Zfu4BjjTxUQDDzxaTKotcKA&oe=630037F1',
        title: 'Vô Tư - Cỗ Thạch pebble',
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
    {
        img: 'https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/271824931_462749775523565_7331201054760908998_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=102&ccb=1-7&_nc_sid=a4a2d7&_nc_ohc=PC475JA9dukAX--rG1N&tn=W67W2u7LmJHcXzOa&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT9g1dctY8EM-rpDDKyzKWttX3wL-3lqfuUzyuozbqtz3g&oe=630122DC',
        title: 'Bao Lì Xì',
        type: 'others',
    },
    {
        img: 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/272153387_466897561775453_7788437123873466021_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=100&ccb=1-7&_nc_sid=a4a2d7&_nc_ohc=avWN3AQUwv4AX9NQ9oO&tn=W67W2u7LmJHcXzOa&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT8UcfBABHbzLLtmin5IE0m1I4IlWMKc9kt8hV6cPKTTPg&oe=63002270',
        title: 'Bao Lì Xì',
        type: 'others',
    },
    {
        img: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/272264338_466897585108784_2218762208713552667_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=103&ccb=1-7&_nc_sid=a4a2d7&_nc_ohc=AC_N-OUZ--oAX82gnxY&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-kyqb8dW3lKZxVPEAuHMucF438j38MNd4H9BCVmRWjBA&oe=630003C8',
        title: 'Bao Lì Xì',
        type: 'others',
    },
    {
        img: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/104794019_1378049009047641_3971585274296060406_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_ohc=RlkMKFaCe0cAX_LKjHs&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT9CB53knkUS_ueQMWCzK5QkZfMEeGPosy-PBA9IppChnQ&oe=631F501C',
        title: 'Lặng - Wood',
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
        <ImageList sx={{ width: '100%' }} cols={3}>
            {dataFilter.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={item.img}
                        srcSet={item.img}
                        alt={item.title}
                        loading="lazy"
                    />
                    {/* <img
                        src={`${item.img}?w=250&h=250&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=250&h=250&fit=crop&auto=format&dpr=2 1x`}
                        alt={item.title}
                        loading="lazy"
                    /> */}
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default React.memo(Gallery)

