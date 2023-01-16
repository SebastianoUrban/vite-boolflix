import { reactive} from 'vue';

export const store = reactive({
    results : [],
    searchText : '',
    flags : {
        xx : '../src/assets/flags/4x3/xx.svg',
        de : '../src/assets/flags/4x3/de.svg',
        fr : '../src/assets/flags/4x3/fr.svg',
        it : '../src/assets/flags/4x3/it.svg',
        en : '../src/assets/flags/4x3/us.svg',
        es : '../src/assets/flags/4x3/es.svg',
        sv : '../src/assets/flags/4x3/sv.svg',
        vi : '../src/assets/flags/4x3/vn.svg',
        hi : '../src/assets/flags/4x3/in.svg',
        zh : '../src/assets/flags/4x3/cn.svg',
        cn : '../src/assets/flags/4x3/cn.svg',
        pl : '../src/assets/flags/4x3/pl.svg',
        pt : '../src/assets/flags/4x3/pt.svg'
    }
});