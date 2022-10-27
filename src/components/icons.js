import React from "react"
import { View, Text, Image } from "react-native"

export const OK = () => {
    return <Text style={{backgroundColor:"limegreen",borderRadius:100,textAlign:"center",padding:5}}>✔</Text>
}

export const NO = () => {
    return <Text style={{backgroundColor:"#D3143C",borderRadius:100,textAlign:"center",padding:5}}>✖</Text>
}

export const DownArrow = ({style, type = 0}) => {
    const base64 = [
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAA+ElEQVRoge3XzQqCQBSG4bcuMF0ULereI/uBuoUCW+RQDXNUqtEjfA8MtBjH86JBgYiIiF8lcAUuwGLkWX5yAupmHXPeaJbzcJ4Bg9xvnuvgoSnEG4V4oxBvFOKNQrxRiDcK8UYh3nwbUgAVsGs+/6pozqr+dF5vZ17/xW/A2thXRytl3ZwR9pz/OmmHis8BrZiukDiiBvYZ5jUViQFSMW0hqYgbA79aAMvEIHdg+7bHClkZ126yT23oikmFuIsI2mLiELcRgfW+xyF9vlejSz2ZtuXqScT6xriOCLpiJhERWDGTigjimElGBCVw4PmTphx5FhEREdMDH8qf8JyJXZ0AAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAt0lEQVRIie3UsQrCMBSF4T/ioFsddBR8HncfW8FJEMHVQdDFTeuiUEqS3tzbdGkOZMiF5jvJUBhbnPK7RWv/AGpjl2i2wO2HNNcd2OWELx60iWtfsDOvCFwDc+lBkxztClzgAo8DngbmDqgC81gqYNaaPYGPtNCB+K8xZZ09ZbxP7YC3tKEw4hsvgSP2216BTWpLK65CrbgJ1eK9oKl4r6gUz4J24VnRED4I+s8K2AMnYD0UWqLKF00niNFFa435AAAAAElFTkSuQmCC",
    ]
    if(type > base64.length) type = 0;
    return (
        <Image
         style={[{width:20,height:20},style]}
         source={{uri:base64[type]}}
        />
    )
}

export const TrashCan = ({style}) => {
    const base64 = "data:image/png;base64,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";
    return (
        <Image
         style={[{width:20,height:20},style]}
         source={{uri:base64}}
        />
    )
}

export const Save = ({style}) => {
    const base64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACTUlEQVRoge3Yu2sUURQG8N/4iBqCIDams7ewENMaCx8gllY2CvY2WogWaxrBF2oqLVxstbQShDTxgQj+AaYTtYuKYB4krsXMujebjdydxy7B+eAyZ8+9Z873zd1758ylRo0aNWrU+E8wiinMYQWtEttvvMSeKsm/KZl0r/a+KhFTAyBfqYi5IMEVjGT+ycA/0yNuJuifzHyNwNfIfOexmkfElkgB+wP7DpYj42LRxAXpWoBDeBYTuC0ywdbALpt8G83s+ji7Ho0Jip2BvFgN7JWI8c3AjuIWOwN5cU36f57HuyoSlClgFIl0EbbxNmvd40pDUQFfAntCZxHG4nPB/NEI9+kQCV7Lt9/PY7yPXJUIgH14ih+RxJcwi8M5cq1D0oeAfmPyoq9cVW+jlaMWMGyU8R4Yx2n9V5Df8BxfN+hfLEKqGxvtDBMZkbyl87z1u1ELCzg5CAGvCpBvt9mue4bkE9zATzyytqj8OyBWQK+YJZ1vg3vZ7xjsxMXMXsaOoO8EXmT2ZdwM+s7hSWSONdhoBoq8NWNi9+JDMO5Mjjz/TFaFgAS3pTNBR8QDBV6iVQpYCHyJlGjb3xYxpmAFUJWAkGRIPhR3IMe9eyYrW8AiTmV2gvtd92vhoZJqr/AgayTwFxFwPLv2evItTCuxcAyPVa7qiChauw+EPFzvkSRP+4VjgyYPu+T/8ho6+VBEAx/lO9w9G5CfHjT5MnHLJiZ/RHpysSnJkxZplezzg8BBnaf/XVqNbhrycBefcAm7h8wlF8awfdgkatTowh8KbHppP4NcyQAAAABJRU5ErkJggg==";
    return (
        <Image
         style={[{width:20,height:20},style]}
         source={{uri:base64}}
        />
    )
}
export const Fan = ({style}) => {
    const base64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADd0lEQVRoge2ZzUsVYRTGf1pdFW2RQnZJE3cmGoSrPv6DFhUS9AVBRUW7al26CKKlBVqSrsqW0YdE2abCwLbmRyReAzXUuJWbS4b3tjh3bBznnfu+74y5mQcOOHfuPOc848x5n3NfiBEjRgwFGoDbwAdgGhgBOoHmjSzKBFuBXiAL5HxiGegAEpp8jUA78B6YAtLABNAHnARKI6x9BUlgDH8B3ngKFAVw7QIeo74hTswBF4DiqERUAeOaIpw4reA6CHw35HoNVIYVsQkYMEycA/oVIjIWXDnkaUiGEXLRMvGChycJzFpyOTECVNiIKAXmLZNOe7gehBThRK+NkFMhEna5eOqBPxEJySLtfw2COsIhA9FuLAI3XcetwGZLLi+KgDOmF33B7q61eXjeWPKoYtBUyC/LRI0enqmIhXjfPyD40UrrKvYp3I1qSx4Vfvh9GCTEV7kGvC/jb0seFd6ZXtCG3b9+iNU+Sdfa6MQy0GQqpJHCfkgV48BRxED2Riikw1SEg76QidNAKuD8ELAXKEfudDvSvv2++wTYYiukFrEbUXYdJ8bwt+o1wH1gJp/7BWJCgxy1Fg5gb/ZyyHrktyYdDluYDfYjd8hUxCUXx2XX52n0B7DIUQ3cA5bQEzHmw+HMNSmkCYwiC28GWX8GgGtA3TrqWEEdcBUZeFL5In4iNruHfy/3qM+1uq14CegGdqyjjkAkkMfGKeis69w59ES4YxZ5R/87Wn2KGQY+BRRbKDJEIKYIaX39yKw9g7TGGp/vlgGfQxQcFAuKnFpIAM8VxIvI4tWELGYtwMeAQlKsfuRs4pGtkLshE7ujJ39jjmD+i4wTWWC3qYg9iEGLSoi7g5Uh1sSG54apkM4IReRYO0O0WPK8NRUSpsv4RcbDX27JM6kqWDVYbdNVrIlvnuN6S54q1QmVkK+WiVSY8Bwfs+SZV51QCTEeJwvgpevvWuCKJc+Q6QUN2E+H3lhCfoF30B2C67ipEIhuRO3y8NqMAzlkm6HERkgF0v/DiJgGtnt4TbcVnDhvI8JBEvuVOAPs8+Hst+B6RQQbPpXI7GGSeF4hAsSEmnCNE8FGj4NiZBtsrkDSLPAQ2BnAVQQ80xQxQsgNHhVKgBP5YicQRzuJWIfr6Ju6BHAHtZ/LIkbTamNnI9CM+LphpDEMArdQ7IHEiBEjBn8Bm5mFiq2jC+cAAAAASUVORK5CYII=";
    return (
        <Image
         style={[{width:50,height:50},style]}
         source={{uri:base64}}
        />
    )
}

export const Door = ({style}) => {
    const base64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAABVUlEQVR4nO2bWwrCMBBFryIuSlyBC3Er6rZ8rMTHMtQPKw4FadPcdKbhHihGlMnkGk/jh4AQfVkCOAB4AHgFve4A9k2vdPYBFtj32pUI4N4UX5UoTmKN306g8003Okl9zjMmumC8Ld11nYYuYpbw3m+qs9bzKLT76rW2BXFiL7I+iJyvQBUoAGItK8XBUhobZgBPM44mSArt+2uUc0FWX3KAdwPeSILEWpKgE5JgDgqAWEsSNOMIbqAjCdaIAiDWkgTNOIIb6HhJcAPgiv+7a7S+vAKwi38BOHr15RVA1zxhboOSoBlLggXn7XpdJ8EUFACxVikJ3prHIoKdggS3+JwFStROQj+Ha0QBEGvpJGjGEdxARxKsEQVArCUJmnEEN9CRBGtEARBrSYJmHMENdCTBGlEAxFqSoBlHcAMdSbBGhvxpair0WlvKDjgPbMSDyUhYePMGZycvbdFCor8AAAAASUVORK5CYII=";
    return (
        <Image
         style={[{width:50,height:50},style]}
         source={{uri:base64}}
        />
    )
}

export const Light = ({style}) => {
    const base64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABsklEQVRIie2WvUoDQRRGj1YpBEOSFV9A06lVuigoESXPoE9g7LQx8S1SaLqkTptWTPAZIgQV1MYUCsFGJGqxd8hk3Fl3JyIofnBhZ/be78ws87PwL19JoASkJvBIi0cyTtE+8A4cGP2bQA24BJ4lusApUDByD8WjFAecEmhG2lmgLUZhcQ4sSo0nHs5fbQ14igBV8QisusKUsiHQOtAIgS9MArZ93ist58aSc+YKLQTA2sARkNDyEtLXlhy9ZsMFXDNMlo33HqPFp7Ri1JzYzKdDwHmjvaQ9HwMPEhVLDkRcZBdAR2sPGB99S/o94E3rHzKaecuoGdj89RkrsyiKmqcrsn+X8dHvaO8q+DMd4i8spV2jpuswQKqEL64MXy+uqgs4Z5io7VTm83YqE7ydci5ggKZhpOJay7EdIE1XKMA80LcYN7AfmX2pnUh54MUCCIpXYN0Vlsa/Tz1pl2KA1f07Jx6xrsWgH4F6BGhdy3f6EUgCe8ZoZ4BeCLQnOUop8ZiNA7apGAIufgfg72rKocZ20MfyCruPbboP6Ltz8ImtbQGpRXULbP0EWKmDfzH8Ln0AV7HdPmTXQhYAAAAASUVORK5CYII=";
    return (
        <Image
         style={[{width:50,height:50},style]}
         source={{uri:base64}}
        />
    )
}

export const Valve = ({style}) => {
    const base64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACj0lEQVR4nO2aTW7TQBTHf0VVyhKpixYkJHoCLkA5AHSBRAAhjgAqS0ilqghOQTkB4kOskGBJywJY9QocALU7QkjDYmYU17I9ni+Pgt9PGjmO/d7838vM5GUcEARBEIQQtoDvwBiYddTGus+bHcTXyBbdBV3XbiWPsoEfWsQIGBREGVKdD4Ad/fpbUASBmGE/0OddJQBgRb/+7akdgOUQY+aB/9HHQ84KTnk+1scVZ9URKX9CC9f/uUhCFpbeJyB0DTDknAZBhI6AwygqwjjILaAtbResThfW3q8BkoAEPr9SXbMbbLV9033R5/tSbIekn79RNcf6GqwidnKTJLb3a0DKEbAQxVGKEZCyOFqYogfiFTRJC6PerwEmAVXf3SHDbaiPpwE+DMbHsPGuZqzx2YoSF56iRM+AfU8fRV5pX6fAE08f1vhse3FtGTEX+4x4tcBjYKp9+yTBGl+MBAxRIqfAXXeNVu4V/LtOB+8E+LSRozgXzFa4byvHV/uGj/Mpas6n+H1hWEKtCWY6JE/A/0JtfFIH5BaQG0lAbgG5kQTkFpAbSUBuAbmRBOQWkBtJQG4BuZEE5BaQG0mA5brrhsjLZErn7OO+IWIl5pbYw4DgbGwHaivHV/uGz47QbdRu8F/ggaNtG+4AE93HfUfbzrbE9rTdBHjkYV/HtvY5A3Y97FsnwHnuVLBbsH8NXPT0A3AJeFPwt+PpxxrfQcXFL56dgdrDP9F+joHnwJqD/RrwouQj5NFY7PhasQF8KHQ4Bj6hhvMmsA6c120duI56AvQZ9edrY/ceuJJabEo2gXeoxbHtaj0B3gLXUotL+RCjzCpwA/VJXwUuAxf0tWPgJ3CEGpofgV8dahMEQRB6yT+O4bj6pOAu8wAAAABJRU5ErkJggg==";
    return (
        <Image
         style={[{width:50,height:50},style]}
         source={{uri:base64}}
        />
    )
}

export const Fog = ({style}) => {
    const base64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAET0lEQVRoge3ZfczVYxzH8VfdPdwl3ah5GBVaHtqUSUgtstlIzT8YNnfzkOim0RJtGY1ZxLCxKTNkYVjN8hBJa5inNdMaoUg3MfJQiVjJH9/fvU7Hefqd3zm72c57O9s51+97Xb/v9buu6/P9fn+HBg0aNGhQnC6d7UAWTsXL+AV/YjUmdapHVXAhtuMujMAQXIV2zK/ljWq51IfhLOyHz/A51qEVL+bZDsT7eAYt2IXXsQR/19CnVDSJJ/4HPsQb+AE7sLxEv+uxCXMxD99icTJep3AvvsSonLZm3Iq2Ev36oHfO74PECj6KObgY3WrqaQmGYKfY/4XomnK8VmzEU2JS76FX1d6lYDpeStmnC0YKNcufaLO9q9ATb2N2FgcrYRzW4+EK7QdiMpbh1+SzSjhcjCl4LYOPZTkT2zAV+1dgfzC24F18LJTqAKzFDSX6zcXTmTwtQE9xCNtFYLsm79ooIb2FGCv2Pfse4Dahdufn2fcVq7cdYzJ5XYAF4mlOECvSM/lcnrRvF7Gjd7EBinAPHs9ruw1bMTGDvwXph91in+fyBD7FUjGpsVWMfTrOzWs7W6hXzRmBnwu0f4PxdbjfJBH5a04f/CZSkFzuxo9iRQaozVboL1Kc62owVkEeFBnsMXntY4Te7xEBrDnn2jDcjkcwC8eWucc4fC9ysLqkKgOF3F5RwqZ/zvfueEjkW88KGV2S/J6T2PTAICHNhOJ9knO9LszDCynsR4oE8si89hNEcrhcBMRdYiXXijpllZhg3XgTV6bsU6xEGIsVQq26i4A6WcjtTdU6WCnLKrhJL1ya4R6jRXAckmGMstyCDxQ+gB1P/jm8I55ytTyvzmekBV/hMfumIeMxEycKee7/766pmCEmk5pK64WtItoOx3dCbr8QLxXW4SQRwLZU40QOLULZUpOmAluPU0QdcTw2C0ndKJK8SrLgcpwjtmcP/FWD8SpiAX7CcSIW7MAZGcecLer4NfbGl7oyWJS4R+S0TRGRf4bYImnoLoJjt+T7UjyQ3c3yXC0mkr81x4sANzTleIOTfptFmdCKtzL6WJap4lBPK3CtCb+Lw5+WJlwm1O9VoZB1o4tIMc4rYTNXSPVs1cnxSiEgA6roWzEtYguUOgNdRXK5HvdJ/zbzI1xUlXcpaRfvdDs4BAcWsBsq9vyKnLYmUaQVk/2jRcyamd3N8lwi9vH9uEMEyFlFbHvbK8ljhKTuweElxj9ZCEldt1YHo0UcWSQms035A/6KqPv3iBcWxRgmVmV6GoeqrcLahdYvFodzt3gR0U9sm+G4UdQcm5I+F4iUZpE4OzvF+RmUjNdBLxFLbhap0NdV+lg1p2GhqLdXi1RjgyiNJ4rIPyyxnZBc3yLkepRwfgMOTWzmi/K60+kmavXdYuu1FrFrE6uzUlSMd4pcbg2urb+bldNX6fe7cJSoEqeJun0nnpSttvlP8L/+07RBgwYNyvMPYozf/WKwEkwAAAAASUVORK5CYII=";
    return (
        <Image
         style={[{width:50,height:50},style]}
         source={{uri:base64}}
        />
    )
}

export const X = ({style}) => {
    const base64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADBUlEQVRoge2aP2gUQRTGf0ajCVEJglgIgoVFBBsLgwa0Emy0sTKWnq0YO7VU88fK2BmNrU0srGyUmEJFRZNCElAUFEUQNCIiepicxb5zl2Vn583O3N6p98FA2Pnme3Oz3829eRNoo41SMQ3ULK0KVALGrIimLe60i+icQrAGfAf6AnyIPtHSxJxzEd5JtDpLwICBMynCz4DV7nP/g1XAY9G6ZuD0A7+k7XINMCriC0BXRn8P8FI451zFEzgvGq+B9Rn9a4DnwhkpEiApMGrgDBCt0hKwt0CMPYnx+wyci+QvqAr1V5pnsWHiFV3noN0DvJCxFzziq2GzWCexxyccdK+S/x3ztlSeoMliyV3nsELzkHB/ADsMnCCWSkPziock8EdgU47WRuCDcE96xCsMm8VWALeFcytHZ0o4d4COjP7glsoLYLLYZuCTcLJ+9Y9L3yKwxaDREEuloXnlgzKRb8C2xPOtwFfpO+KhHwxjxCvWbeDcEM59YCWRhWbk2ZRhjOaNB4UmYC/wRjhngLPy9ztgg2FMKZZKI5n79Bs4+4Fl4Ke0ZXlWVK9h0FhsnDhrvWTglG6pNLqAecsEuoEH0kwftr4g85RoqTR8d5lSdykbNBbLQtMtlUbRCSUXoGmWSsPVIi1lqTTqKzyr4M4KdyxU8Kyk7b+Ga3GgJa1VNO1OHgtcdruGoWiOlFyAYN+VovCqN9EiFtOmKA+ltWyKorHUZeKkcdzAaarF/ok0XrNL9QJvhXOa6HBVA95jPlgVzdkKQ2OprKPuPXl20zCmVItpdqmj2IsPgxb9hu5iGksly0HHMvor0vcFczmo4Razpd0dwF30BboZ7AW64OcUjaVO4V4yHbLEC2oxjaW2ExexDyo0DxBtx3lF7OAWs1mqE3ginCsOuhPE5xfbtYK3xTSWGpFgryh+0TNsie9lMY2lfK/edifGm67evC1ms9Rayr8MdbaYxlLXRfwp/tfTj0Rr0jIfZ4v9df8wYCo+LCqCV4ETRNbzxYJoVRXczwHitdGGFr8Bvt2IJri0llwAAAAASUVORK5CYII=";
    return (
        <Image
         style={[{width:50,height:50},style]}
         source={{uri:base64}}
        />
    )
}