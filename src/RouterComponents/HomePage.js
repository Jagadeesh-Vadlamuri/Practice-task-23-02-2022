import React from "react";
import { Routes, Route } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function HomePage() {
  return (
    <div className="card">
      <Card className="card-body" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="230"
          image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUYGBgYGhgYGhgYGBgaGBoaGBkaGhgaGBgcIS4lHB4rIRgaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrISs0NDQ0NDQ0NDY1NDQ0NDQ0NDY0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwEEBQAGB//EADwQAAICAQMCBAQEBAMHBQAAAAECABEDBBIhMUEFIlFhBhNxgTJCkaEjUrHBctHwBxQVYpLh8SQzoqOy/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EAC4RAAICAgEDAwIDCQAAAAAAAAABAhEDITEEEkEiUWEFgTJxsRMUQpGhweHw8f/aAAwDAQACEQMRAD8A8uglhREoJZQTyJz8FIlFjkWQqxqicc2Wg0EaogII5BMJMoJRCAnKIYEzbAioNQ4MLAipM4wTACQZMC5IMKAOSIAMJTEwDENYIhCIoJYamLBhiADRJEFTCBmiAIQxFiEJSYDBOkLJmiEzgJM6TNEIEiCwjIJEtCEMIt1lgiLcS0Syq6yu4lxxEOJaJZTdZXdZccSu4mqJZVcRVR7iKqbJkMrossoIpVlhBOCctmwYEYogrDWc8nspBrHJFLGrMZFDVhQFhAzMCYJhQGgBxMBjJMW5lJAcTJBiy0lWlUA0GSDFbpO6KgLCtGAyqrRqNIaGh9zgYsGEDAY5TGCKQxglpAGIYixGCWkAQkyBJloCRDgCTctEnSJJkS0xEERbCNMBhNESV3EruJacRDiWiWVXEruJacSu4msSWVmEVUe4ipoiGLRYaicghgTzpyNwlhLIUQqmDdlBLGqYpYwGQxjAZNwLkgyKAaDBaQDIJioCGi2MNjEsZokAJMlTBJgXLoQ0tODRW6EDFQxqtGq0rgxiGJoCwDGLK75lVdzMFUdWYgAdup+oldvGsAVmD7ipraqncfoDX6y4dPkybjFsfckaqxqmY2Lx/AV3EulEghl/l6kUTfb356TU0moTIu9GDrxyvTnpfcfeaS6bLjVyTQKSfBYEIQQIQkJDDuSIAhCMkKTBEkGWgJnSLnXKQjjBJkkwGlJ0JgPEvGsYppcWQyu4ldxLLSvkmyJZWcRMe8RLTJaJQRgEBY1Z5cmdBwEKpwEKZtgCIYkSYMZNyQYBM4GKgG3BYwbkExUBzGLZpxMBjLSAhjAJkEwWM0SEFcIGKVoSMGBI5AvkC+nYEcX95pHFKTpILH41LEACyeglZ/GcOJyuVXHFhtnkPC97vgsB0q+8RrfFWUMuFGNLu3UrEjruoNYUUQffv3mLi1AzsPn9253kqguidoU2oFizfcT0cHQxiu6e37exLb8FrXaxdRuQ5UIS3PJQGjtIx8+YEGz/AIbqJxr8pHYuUBHXawLIWC7EVgAb6FgAPL14hY9YvmXTYaxWVZ9jFGoeQEno1X1N89yZcxZtR/DfLk3bT5AQlBRd2FUfydb/ACT0FpUiS34dq8b4yjY6F/jJXIhq73oQSlLR4Bu48l8ZVVyp5lVsXykBYhgaIG47k8jDggcQcmVXJOwDy0oXggAeccCiOWi9aq/w1KrtRF5IBNqzHnuvJ3enN9hJtt7K8Df+MZSVIcKFpSjoDua6JLhrA4uj6y5rviF0DlMIYIFZiSX2hgOdt9OpNE19oLPvdX2qgc2H6qrHncG22Od3QcbiOgEz/ENM2Fw6k5AFT5qbjZqrcMLrgkccUe0O2CVdq/kKtnodL4kX07Zjj5UAlQwHemo3R45F1NFkqeH0HxANC/ydrHT5ayoVcl1VuBW7gEbeR7T0+p8RXT5CpRnR/P5QpAWgSwA5UWXbnjrXScmXp4T1FU/6Fmjc64vT6nHkT5iONl15jVHptb+U3xRqEeJ52TFPG6khpphXIMG5FyExBEwGMgmCxgIhjFPCYxbGVFki3MruY5zKzmaxkJoU5iSYbmIuadxND1Ecoi0EconnM3OqSBDqRUzYAGdCYQagBBkSwuhyNyEavUih+plnSaTCybWYjIHNhSKK0KAJ4v3FzqxdLkycITdGdcjdE+JatEfaAVIPIdrDKLshgARfHaVMXjICb3xtsHDNjKuBZsWDTDiuw6mbx+n5L9TSHZeJ+gu6sgXXWrgl0tQzjzdK5P8Aaef1PiAzhUx5A7kivxYshY8BFNbW5NAX3HXvS1a6nD5TvRu6uRfSqXd6D0nXDoMcfxO2LuPTZ9WmM1t+aN1Ha43KvAsoOSd3p2PrxO13iOPGChyjFkNFN2JlYAmgXJQgD7fpU894N4a2rAT5qrQPJYHYBVbgzAndzwOlStq01OtdNuIsUQY1CkE7cf4mLE88kknpzOqOHHHhJEt+x6rVeN6pMYYICHAZHVvmIVBs36Hjv6+0xfBsGXUsUAQBbemC7AGbaijaORZPTirFGqNfR+E6gI95XwqBYxozsXJNEAKdovrZM0/BvAmXNS6g4OLJHLFUN88kHlQa5+nPGmkhbZ5bRahtPkDg0+NwCl8MFa2ViOCvlA979p6DCMefI2bFibGgI2pfkDUC7bhxRJraOnH2uaTwvAr4m34Xys97WPzCxYlLdDd8+YX6WfWbXjefT487Im1gcapsTy7H2sQKAFcUQPX0ick3QJNIx6OwpbeUUgSgvJ43AcHyjg16fatlTyre5mN+UCqZQqoeeOHsHqeB6y9lVuCEYWAQD1YcV14HIBuu/aIyaXazmySL2gjm93JPPvZ91EtfANF7T6fld6qjVQQsTdr0JBJ5IUm+alXJmYh0fFiYMC6OqkOHZyu7ceSvkIoeneZx07oy6kEvZf8AH+IEA0W6buCp9ulT0+l1uDL8kuq5XVeRTX8shQAwA5pt1dR5jI5ryNfJR8Nyq+1HyrjReOSGClm81X39+Bx+lp3xqyImox5VA8xcNQ3EjZvs+bzLRJv2k63Gd5yYiEUsysm3nYOT1AAri+/0qyD5wEyYXxXuN/h5snysaNHiiFN9+RxLdXbD4LyaLDj2Dflx7mYHGBYUsLJUkE4/qCAQfpL+p0qIGZRuVhbB3BcFD+XceAQKI6TFTARbFHO7hbditAbbo9f79PQwtVo95RdjBQCKvgdztJ9el/Q+sjvhHehbNB9L8oeQWmSlI8tC7NtR5HPvyZZ8OxbMRDXVn5YYcqL6A909JT8L0nyvU9doJUhSWJLVX4q46zT1erZ6B6DoPtObqeqxvG48sEnYm5xMXc654xoEWgEyCYBMpMlktAYyGaKZ5ViIYyu5jHaIdpaZLFOYmG5irldwUXcYlhBPLZNfmZDzsugGFWIvT6pkP/qcjDigOu4HvQ6TSP0+T22ansNw9R+srLrcbNtV1J6UDfYn+08pj12JCdrgjtuDA+nWVtTql32CHoDzpuG3sfSzU0X06P8AE2Fo9XqvGMSdWsEXYqutfWdk+OkREXEi717/AIVvabNiyTzPM+JNkxsAjb8bqt+VWAbqygkcdQfvIxYs2ADOy43xvahWCMevQ0PK3Fzqw9PDDtLb9yW7NfVfGOqCjIyoUJCgr61uNE+1wtH8VYcgyK6um5bAUWN61sClTuBvvMfUBGbeuNWVvNzuABNbtqDooP6z0nw9q9MzYEZbyJjdVpNosEcMfz2LP2nVCfqSJktWZWbwN3xNmwO42c7G4BHlsA3ZPN88Gpl6LHk2vibG/wDE28Ka2kEkUSa5oij6T3GR9hyoUQY8ik4wWUbXXkq6kg1fQi550vr0UJSImQ7lLbaJSzZ6kE+keWLW2EZJ8FXw74ZV8LufmK6OjA2tBG4VWFg7tw6j2lvQfDgzqGdWfISzM75CdygGv6X15uWPBNZnTUKGxKQ67GD0Bdb/ACk9Lr68+szMXhD52AbK2PFvJ2kMxRGam543NXYzG3eyqXhGp4RpNKuoC5AWORSuNEHkLMR5KHI3DgG+xldtbi0bFWwLuO4hb/KHdQjnqD5SvB7R3hXw25y4VTN8sq+/5mw7t4Ngqp4/KBXTnm5o63RLg1L/AD9Yu4MfO4Syri2pOaPP5QOYm90VQXhHjrn+MuPCu/eTiD+dV5CN06Fi3Br1mXpTkyMGLZSw373CqhJKkMNp8p/EL4PTpdS1qNXhTa4x7hT07qaarsqTVkGunHI+kdpPH8XyxTpSv6NuyWR5VHB6Hqe47RJeQ+Cqv+znJ5G+ci3uaySGBBtQrD2o/wDV6XLHgmgHzsi5f4hJo7WR95UG32u3nBNnlu1DiPy4BkK7wzkEq4d2GwHcbVVO2ywHUcWee0Vp9BgTcXUKAiigp/huV3BX821gCw7fnBs9Bai2nbJaSY0Z109FgCKCEIhBBCBtmxqOM82B/KO8nT4b84q/xG+horXHfrf+jH/Mtk1DClyBMTh2BV0CkI1dA6eY2e3s0oN4iillQvsTeFYgAvyFG88cEeYc8getUpTUeeSoQlPhD9WG3WOV3EgtW1W2kHjjt36cQfht0w5ip204boASD7egqh1qJx5i52rY3V6CwOFs0Ae5sGubocyyuDcaC0exYc9BZPb7dJzPqVFmzwSXJvJ4crAuKtwAoPTcKokDoPLZ/wBVCeHsjEkW7BtzgV3PQdu/SV9HlYEeUkrzf0uptaPV/MV1CsrBHIJ9dt8feX++YZLnZjLFJGLgX5QZN28deQKVu+3/AF1hfMJ6ykrx6NPLyZZT549hUPDSCYAadczoCbk3BnXHQWcxgEyWMBjBITAYxTGExinMdEgOYlzDcxLGUgAcxVwnMTulJCMk4P8Am46EduY/PokbIrNZYqLo2OBQuUH1SVVfS/WLTV0LHJBoC+vtPeaHZtPoUVReNSL3FifNX0jcuPC72pBBCEqeDwOQAOkr5MxPLoSzBbF0AJW1KKjb15A7qehquZl3Xwadtcj009PsRxQY0rCwCebhaVBjZaZWblSNoI3Mauj14lPw7UfxOTZFnrJGqBbdz5TuBHTgwavQk0tno8CPpwWxZVRBXzBlRWDN2C7asWTPP6wu72pxuRzvQMlkkmqbv2lzNrjmQHdzdgdj63Kz5iE4B3A7vL046cRRglvyOVPgY3i+Nc29cDg9CC26gAA4I5seg+k1fFtZjRMeUMMiv5PlqAuZAvPmFc1Y/USvqNWuYIbG5QSVAF+av7gcy9rc2A4cBG/52EbHZUJfYBfmFeYHiiO9+8cskpVFiUFG2il8P+MZmzocRxozFkb5iVtJW+P5jtX25MVnzalNQyaZ0zsH/EFFFvxVRNWCSDz1jtUjsHXe2wkEblUBGc1vLcgEg2RNTxbPps7L8tSAqjflx7VJcUB+EjcRR5quRJaalxpj8Gb4HhfUahV1nJdmYYlABsdSy3woBvi6v1qUMeLGjZNyg5EDqw2Nw1qd24/i6HjuTNYpWNModiPmbBsJVzsPnt1Ionay/SpT1T72BBKBnLLvUMVJJKDnrdjnvyY1F9zfgTdIwfGtflsYnYBUJKqNtqX8x3Fepv8AS5c0GqTer5kUKLYMBVFQASAOvbtMl9Ozsd3Bs3yOvez97Mb/ALo+MG1bY20ghfKW67C3S+9A+vvG64Ji2e4wadWt/N38tMb2319eUDDi+TXEh8ROMkqQdqsxblEHFru/OQUPC3wAPSkeAa8lflOVQHc6myQw3LagnvZbufSW925l+aa2btq7uvQWVHWugmGbOsUeLfg7em6WWdvaSXJV1WNmxJ5tqm9i1t3X1sdiQAP7SvkxLssBmZmFqWNDjlb43VV+8u1uK5MilSm7apPBBA8zL0vj95Sy6xgLAoh9oLKaI7bR788Dk8es839pObt7Z7mLBDHGuF+tGj4cioKdrDEAUKvsFNDiueeJo4nTcBtbzHoOQa6eY8i5QzAYlCpZYtZqgxHegeg6QcL5QXIJNg7RdFfXzdq5nLL1eqynhUrdHpceUL5QoUkWEFGjf4ifSanghU5G4sjyk10sAsBfbnt6zxS63YyqoLO9sSTYAUfiZj+XkdPWb3w5mPzMaWzEAsW7Egi9x7E7uPpOecO2pL8ziz9PUH8cmFmXY7p/KzL/ANJI/tJR4fjhA1GYAEeduD1u+f3uV0ad/aeEW1aHcro0YGj7RWMuCTIuQTH2iskmCxgkwWMdAC5iHaG5iXMQAuYp2ks0S7RoAXaK3TnaBctKwPO/8LJIAc/ipvKTXvLT6VcJ24V+a553H8v0E91ib5QC7Qbarr1ga/RebeqgNVWB2nrOxKSXCPmwGd8oU7g5Nc8ATZRsmlbbqMfDVyOQ02G0DGy1dqPeT4ljLoiN56IJ7mhE3GiouVkHwzFqAzIgRqtSD19qnjGbaSHBG07WWe3ZyqZgPKURWSuv1/aFoPDsGVFfLQytySe5+kmMnWy5peDwqasr+FmA6cjpcsYt+3djfcSKYHrPfN8OI6sQijjsIGk+CsZQPyOeRG5PwZJnkPD9LmyH/wBt7rysoNce83h4bqEbGjhd78rbC75ALEdhc+oaTRomAKFHlFftPHaHwcHIzlmJGSlsk0oJ4sxxl5ZXdaoQ/heqx6cY2GO2fkgEkj39TQi/+CanGN6KGDA7ioUA3f4RXBrjr1H6e28YxA40BJA3A8dRQqQm0KEJJU0K68Ec/wBZXfT4Js+dMdRjyrie1GXcQHKbCdpB5SyCP616CtDTfCmTUJ8xsyBCooqp3MOtjdVev2nofifCiNp3IFfMC3xZ3CuvbpHnGyaXGn8gX3qj5QYSlWwb0eU0vwqrEoXfePwbQNoUEAEjqLFgV7T0WT4dL4vks5dT5KfqrUCCG46dR7iI+BtUz58hZt17iOOBRoD7Aiey1yKQV/m9jwQDfT2uQ4RnyUpuD0fE8fhefT5BidSW/EhXzFijAjb3BsDp3rrPQvjIQM27K45agNzHc20s17Sa/T2sS1/tO0Z+Th1F+dMny2P/ACspY89eqrz15lXROqhlD2RjB2fnLP5kuiOWPJrso7DmM2JZFTOnpOoeKXcvyEF3zMAPJjUeYkWxJHKqeg+sc2sUZPlrbMtE8cLx1ZjwDXMb4pqbDHEy5HBAcXQViX3WlAgDaRxdkdjcrIGAoldxNkgAD7+v3nkZMfY6fC4r9WfT9PNZY90XzzYlcqU2UAsWsbiOSLoBb6Ka6y1ptMoxkZNxLXe96J3G9oA4rjoJU06LmUl23Ju4C2Adp7tXKy05xOy9GKcqL5F8AkfbiRPWt/PxXBcop1ST9vCb8hI/4gqqCu0BboUel+grmew+EtAqs7g2WN9CQQBQA+gnmNJjLMoG3bZDEtRXg1Q7mwBU9phyDS6Yu1VjXctcFt3Rb+pqc87bUV5a/wB/ucP1HKowcb2eG8Yzh9RlYGwcj0fYMQP2EUjSij31lrGZ30fNFxWjA0rqYYMKEODSCYAaQzQoAi0BmgM8BngBztEO0l3iWaJoCHaJZpLtEu0aQEO0VunM0Xc0SA9rkUFATzTCFqXANX7ftKu+xUYWR1F/lP7iem00tEGbr8lBr4AAlfwlD5nPIjviAqQqJyzkCh6S5pdLtQKBIcWaJ0rA+diZ2Wrf5YB+kbi0odQVUbk5U13A6SND4eE1DvX41FH6dZr+G49pbj14jSplOSSRe0+NjjBIAYqOB6x3hwpOfv8AWRhyWhNekPAtDr7y2vYxNbEQQRMXFpSm43dsW+guqmvpm6xTjysehomDj7jKvjVHGvaj/YzJzv5N91aDkewmz4hj3Y+OeQambqtOVQJ9v1/8xVtsBHxegbDpDf4tTpz/AJzX12JWRwe7D26G7mH8asV0umPHly6f/wDVTZzPauT0oc/aU3tCMT4Mx7crVdec1fqRR+9T2Yz21duf6E/3nk/h7KvzaHBOOx9Km1j1IZxXNM/0PFdf1jWnocjK+NCj4hjZXIcqSUWyPIQKB6nv0qhPIarwku7ahqV0NqqV1wo7bbvzmge/QV2nsfi0EYCAaY43A6UDQRbsHu4/108v8T5nTCm08/MXa4Nbh8pg328wHPvCa9LfkqEqa1onP+MOlHHmxHI4HUsqB1ZSepYvRBrp+tMaNGb5jBiaqmPAA7AdpoPq8Tppk27ciPh2beUYPuDMXC15QWNeqj3q5m8KyKxN+U8AFaAINsxPc1XHSeH1EnGvD2vtZ9L0OaFOL4tP70ZDKzGloD8zHoBYsAd2I49rll8QawAFZgAWAG4gCh+glpfC3AK41J5NFros1kliPczZ0ngIB3OKZFJsmhTABuD24/ecjyLx/k68nUwj6nz7exHwzoVJG1OF3KRyNzVZbnqfNdzP+NvGQ23TYyNq0chU9WB4Qj2q/rXpH+P/ABQmJRi09M+3azg2q2KtCDy37CeIXk89T+82wYX3d8/sfN9X1H7SWuB6GWsZlbHHqZ1M4yyph7ohWhbogGb5DPEl4LPE2AbPBLxReCXkgEzRTvOZop2joCGaKZpzNFM00SAhjBucxgXLQHrdMenuBMnTagjNlXqN1/sJqaI0AD1HE86dVsyZCe7ED7gCel4ILXguZ8uoZyPKDx7VPWv/ADAdJmeA6QIgseY8n7zUzJ5TXf8AvEl5Kb8EKGLhwPKqfqTLunfdTDj/ADgaRKXb7TsabTV9CDJd2mGqY3SZ7B9h/nLgTgShpMQonoab+pl3G/lX3EqmSX8D0DJZSQfcGvuJUbIQpI9Ja0+YlRca20B2HICgU/iAHbjpM/xA7XQkWppeO1i7/aXnoRGpYXVWRUbGjD/2jYidFirtmwj9SQP6zSyZdmnck9FJs/T/ALxPx0B/uO6r25dO3/2oOP1kZk36ZwfzKP6jmJ8oRV+GzuKsQVBQhd3Bbcv/AGln4F0x/wB3RCpWkIQkgiiByACe99fed4Pn3bFI8y4yxvijW3+1zR+GhsxLzdCwf8XT+v7RrnY2ZfxZTY03WV34SAL5vIjVQo3Siues8l8SNWn0i8m/mk3X5fliuP8AEZ7j4p0bvaLQXenTsyBMit7Dytx7AzyHxkpxnSiharmemAItsgsEdD+GGR+gaMDVZCQi1tUY0pb48wLXXSzvM0NF8QanGAq5Syg2FenH/wAuR09ZlFyxs+gH2UAD9gIxFnmzSlpovvadpnp0+NtTVbcW3k7djdT3vdcydd4xqM9jJlZgfy9F46Ch2+spqsNVmShFbSX/AAHOT5YCpGqsJVhgSrJJQRqmKBhbpDFY6526K3wS0kYxnii8EvAZoUIMvILxRaQWj7QCZ4tmkM0UzS0hks0WxnFostKSAkmDcEtIuXQHpsOY17zI8Oxq+Y7uzk1OnT0PBJ7PEwFCPVxOnRiLKv8A0lbPlteOpI/rJnRPgaLuAUQO3M4KQo9r/SdOgxIfu8t+0uaVwVE6dCIMLUMAAfeV86C770L+kidG+QRU+LMW/Quq35TjfyglqR1dqA9gf0j9It4S4ZXQ4xtPbp3nTonygM7QafcWdTwQaAvsvr9pqeCbhgQH+QC+9gDrOnS0DNTX4N6Op7q3PucZTn14M+Z/HzEZMCE2Vwiz9Xf/ACnTpOX8DBHm8csoJ06ebIscqxgE6dM2AQkzp0TAEmRunTpLA7dBLTp0fgQBaCWnTo0IEtBLTp0pALZoDNOnSkAstAZp06WABMG506MZ/9k="
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Unique stays Spaces that are more than just a place to sleep and get better attention
          </Typography>
        </CardContent>
      </Card>
      <Card className="card-body" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="230"
          image="https://media.wired.com/photos/612909ae0dc7e7002adc8a0f/2:1/w_2400,h_1200,c_limit/Science_snake_E4JCHP.jpg"
          alt="Snake-1"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Snakes can bite and eat the flesh of humans and other snakes as well
            and also the wild
          </Typography>
        </CardContent>
      </Card>
      <Card className="card-body" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="230"
          image="data:image/jpeg;base64,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"
          alt="Snake-1"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Snakes can bite and eat the flesh of humans and other snakes as well
            and also the wild
          </Typography>
        </CardContent>
      </Card>
      <Card className="card-body" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="230"
          image="https://cdn.mos.cms.futurecdn.net/KYEJp9vem3QQFGhi25SYx4-1200-80.jpg"
          alt="Snake-1"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Snakes can bite and eat the flesh of humans and other snakes as well
            and also the wild
          </Typography>
        </CardContent>
      </Card>
      <Card className="card-body" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="230"
          image="https://upload.wikimedia.org/wikipedia/commons/1/1a/Donkey_in_Clovelly%2C_North_Devon%2C_England.jpg"
          alt="Snake-1"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Snakes can bite and eat the flesh of humans and other snakes as well
            and also the wild
          </Typography>
        </CardContent>
      </Card>
      <Card className="card-body" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="230"
          image="https://cdn.mos.cms.futurecdn.net/bQgcMwEnyhFu6ASuUFrtsn-1200-80.jpg"
          alt="Snake-1"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Snakes can bite and eat the flesh of humans and other snakes as well
            and also the wild
          </Typography>
        </CardContent>
      </Card>
      <Card className="card-body" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="230"
          image="https://i.natgeofe.com/n/5506954d-6e0f-444c-aa83-a24adbe874e1/reptiles-hero_4x3.jpg"
          alt="Snake-1"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Snakes can bite and eat the flesh of humans and other snakes as well
            and also the wild
          </Typography>
        </CardContent>
      </Card>
      <Card className="card-body" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="230"
          image="https://i.natgeofe.com/k/c02b35d2-bfd7-4ed9-aad4-8e25627cd481/komodo-dragon-head-on_16x9.jpg?w=1200"
          alt="Snake-1"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Snakes can bite and eat the flesh of humans and other snakes as well
            and also the wild
          </Typography>
        </CardContent>
      </Card>
      <Card className="card-body" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="230"
          image="https://www.worldatlas.com/r/w1200/upload/eb/ed/d9/turtle-hatching-egg-reptile-characteristics.jpg"
          alt="Snake-1"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Snakes can bite and eat the flesh of humans and other snakes as well
            and also the wild
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default HomePage;
