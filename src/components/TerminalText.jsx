import React, { useState, useEffect } from 'react';

const TerminalTextDisplay = ({ intervalMs = 100 }) => {
    const [lines, setLines] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis lacus viverra, pulvinar diam eget, ullamcorper sapien. Ut a mauris a quam mollis vestibulum. Proin eu tortor nec magna hendrerit ultrices. Nullam nec eros vitae turpis pellentesque mattis vel vel leo. Integer vel dignissim nisi, quis porta felis. Etiam condimentum sodales mauris vitae tristique. Maecenas quam orci, vulputate vitae suscipit a, vestibulum in magna. Proin tristique dui iaculis massa mattis scelerisque. Nulla eget accumsan sapien.

    Donec pulvinar ex nec ante sollicitudin ornare sit amet a dui. Vivamus rhoncus quis nunc porttitor hendrerit. Suspendisse lacinia nisi purus, ut ultricies est imperdiet vitae. Pellentesque ornare dictum tempor. Donec tincidunt, nibh euismod commodo faucibus, quam nulla feugiat diam, posuere pharetra nisl est sit amet odio. Maecenas sed nunc eleifend, accumsan lacus ac, fermentum ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer blandit semper risus sed tempor. Pellentesque posuere lectus sed felis iaculis pretium. Maecenas in pretium nunc. Praesent posuere lacinia elementum. Donec aliquet sollicitudin mattis.

    Donec et gravida mi, id porttitor est. Quisque dictum nec lectus vitae feugiat. Sed ante eros, posuere quis sem ac, blandit euismod felis. In id justo accumsan, faucibus justo in, placerat erat. Nullam enim leo, vestibulum non tristique sed, ultricies condimentum sem. Nunc auctor sed ex eu blandit. Sed ante lectus, rhoncus non aliquam nec, rutrum a erat. Nunc sed risus placerat, dignissim mi non, volutpat ante. Suspendisse vulputate malesuada velit sed lobortis. Phasellus dolor metus, efficitur in accumsan non, faucibus semper magna.

    Nunc vel urna maximus diam consequat fermentum. Praesent sit amet dignissim nunc. Pellentesque nec dui mattis sapien euismod elementum. In vel nisi ligula. Ut eu ipsum eget tortor semper vehicula in sed massa. Nam lacinia diam tellus, et convallis nunc iaculis ac. Curabitur non arcu felis. Vivamus fermentum mi vel purus lacinia, eu gravida enim varius. Cras vel eros at mauris rhoncus egestas. Proin eget felis et nisl consectetur consequat. Vestibulum non sapien ac ligula cursus rutrum sed vitae leo. Vivamus id justo tincidunt, suscipit sem et, facilisis tellus. Curabitur interdum volutpat lacus, non suscipit libero mollis nec. Fusce ipsum erat, iaculis molestie molestie et, pulvinar sit amet est. Praesent ipsum tortor, vehicula eu ullamcorper quis, mollis ac diam. Nullam auctor metus a odio tincidunt mattis.

    Cras hendrerit sapien nisl, dictum ultricies nunc porttitor sagittis. Nam sit amet lorem vel sapien dapibus pulvinar. Sed a finibus quam. Curabitur fringilla lacus id nisi sodales, nec molestie neque posuere. Donec feugiat tempor nulla at imperdiet. In volutpat elementum enim, suscipit egestas massa auctor eget. Vestibulum eget risus ut massa ultrices fringilla eu sit amet orci. Etiam a dolor eget lacus bibendum ullamcorper in eget neque. Praesent ut neque orci. In fringilla velit ipsum, eu gravida enim dapibus venenatis. Cras scelerisque felis eget ultrices condimentum. Suspendisse porta nunc id mauris consectetur, vitae scelerisque ante faucibus. Nam accumsan sem et lorem finibus, at euismod arcu tincidunt. Nullam scelerisque interdum tempus. Fusce scelerisque metus sed nunc vulputate, nec ornare sem egestas.`

    useEffect(() => {
        const splitText = text.split('\n');

        const interval = setInterval(() => {
            if (currentIndex < splitText.length) {
                setLines((prevLines) => [...prevLines, splitText[currentIndex]]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(interval);
            }
        }, intervalMs);

        return () => clearInterval(interval);
    }, [text, currentIndex, intervalMs]);

    return (
        <div style={{ overflowY: 'scroll', height: '300px', fontFamily: 'monospace', whiteSpace: 'pre-line', padding: '10px', border: '1px solid black', background: '#000', color: '#0F0' }}>
            {lines.map((line, index) => (
                <div key={index}>{line}</div>
            ))}
        </div>
    );
};

export default TerminalTextDisplay;