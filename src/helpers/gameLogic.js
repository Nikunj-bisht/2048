export async function arrowPressed(gameData, choice) {
  let data = [...gameData];
  let sum = 0;
  switch (choice) {
    case 38: // up
      let i = 0,
        j = 0;
      while (i++ <= 3) {
        let k = 0;
        while (k <= 3) {
          let currentcell = data[k][j];
          if (currentcell !== 0) {
            let tr = k,
              tc = j;
            while (tr > 0 && data[tr - 1][j] === 0) {
              tr = tr - 1;
              tc = j;
              data[k][j] = 0;
            }
            if (tr > 0 && data[tr - 1][j] === currentcell) {
              data[tr - 1][tc] = currentcell + data[tr - 1][j];
              sum += data[tr - 1][tc];
              data[k][j] = 0;
            } else {
              data[tr][tc] = currentcell;
            }
          }
          k++;
        }
        j++;
      }
      return { data: data, sum: sum };

    case 39: // right
      let ir = 0,
        jr = 0;
      while (ir++ <= 3) {
        let k = 3;
        while (k >= 0) {
          let currentcell = data[jr][k];
          let mr = jr,
            mc = k;
          if (currentcell !== 0) {
            while (mc < 3 && data[jr][mc + 1] === 0) {
              mr = jr;
              mc = mc + 1;
              data[jr][k] = 0;
            }
            if (mc < 3 && data[jr][mc + 1] === currentcell) {
              data[jr][mc + 1] = currentcell + data[jr][mc + 1];
              sum += data[jr][mc + 1];
              data[jr][k] = 0;
            } else {
              data[mr][mc] = currentcell;
            }
          }
          k--;
        }

        jr++;
      }

      return { data: data, sum: sum };

    case 40: // down
      let id = 0,
        jd = 0;
      while (id++ <= 3) {
        let k = 3;
        while (k >= 0) {
          let currentcell = data[k][jd];
          let mr = k,
            mc = jd;
          if (currentcell !== 0) {
            while (mr < 3 && data[mr + 1][jd] === 0) {
              mr = mr + 1;
              mc = jd;
              data[k][jd] = 0;
            }
            if (mr < 3 && data[mr + 1][jd] === currentcell) {
              data[mr + 1][mc] = currentcell + data[mr + 1][mc];
              sum += data[mr + 1][mc];
              data[k][jd] = 0;
            } else {
              data[mr][mc] = currentcell;
            }
          }
          k--;
        }

        jd++;
      }

      return { data: data, sum: sum };
    case 37: // left
      let il = 0,
        jl = 0;
      while (il++ <= 3) {
        let k = 0;
        while (k <= 3) {
          let currentcell = data[jl][k];
          let mr = jl,
            mc = k;
          if (currentcell !== 0) {
            while (mc > 0 && data[jl][mc - 1] === 0) {
              mr = jl;
              mc = mc - 1;
              data[jl][k] = 0;
            }
            if (mc < 3 && data[jl][mc - 1] === currentcell) {
              data[jl][mc - 1] = currentcell + data[jl][mc - 1];
              sum += data[jl][mc - 1];
              data[jl][k] = 0;
            } else {
              data[mr][mc] = currentcell;
            }
          }
          k++;
        }

        jl++;
      }

      return { data: data, sum: sum };
    default:
      return data;
  }
}

export function moveTileToEnd() {}

export function addWindowHelpers(callBack, data) {
  window.addEventListener("keydown", name);

  async function name(ev) {
    ev.stopImmediatePropagation();
    if (
      ev.keyCode === 38 ||
      ev.keyCode === 39 ||
      ev.keyCode === 37 ||
      ev.keyCode === 40
    ) {
      const newData = await arrowPressed(data, ev.keyCode);
      callBack(newData);
    }
  }
}
