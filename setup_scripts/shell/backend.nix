with import <nixpkgs> {};
with pkgs.python3Packages;

stdenv.mkDerivation {
  name = "python";

  buildInputs = [
    gdal
    geos
    pip
    python3Full
    virtualenv
  ];

  LD_LIBRARY_PATH="${geos}/lib:${gdal}/lib";

  shellHook = ''
    SOURCE_DATE_EPOCH=$(date +%s)  # so that we can use python wheels
    YELLOW='\033[1;33m'
    NC="$(printf '\033[0m')"
    APP_NAME="app"

    cd dev_backend
    echo -e "''${YELLOW}Creating python environment...''${NC}"
    virtualenv --no-setuptools venv > /dev/null
    export PATH=$PWD/venv/bin:$PATH > /dev/null
    source venv/bin/activate > /dev/null
    echo -e "''${YELLOW}Installing python packages...''${NC}"
    python -m pip install Django

    echo -e "''${YELLOW}Running Django server...''${NC}"
    if [ ! -d $APP_NAME ]; then
        echo -e "''${YELLOW}Creating Django app...''${NC}"
        django-admin startproject $APP_NAME .
    fi
    python manage.py migrate
    xdg-open http://localhost:9090 1> /dev/null 2>&1
    python manage.py runserver 9090
  '';
}
