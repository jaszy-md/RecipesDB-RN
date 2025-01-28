import Colors from './Colors'

const size = {
  h1: 35,
  h2: 30,
  h3: 20,
  h4: 18,
  p: 18,
  normal: 17,
  small: 14,
  mini: 12,
  title: 48,
}

const types = {
  interR: {
    fontFamily: 'Inter-Regular',
  },
  interB: {
    fontFamily: 'Inter-Bold',
  },
}

const alignment = {
  center: {
    textAlign: 'center',
  },
}

const style = {
  h1: {
    color: Colors.text,
    fontSize: size.h1,
  },
  h2: {
    color: Colors.text,
    fontSize: size.h2,
    lineHeight: 34,
  },
  h3: {
    color: Colors.text,
    fontSize: size.h3,
  },
  h4: {
    color: Colors.text,
    fontSize: size.h4,
  },
  p: {
    fontSize: size.p,
    lineHeight: 22,
  },
  normal: {
    fontSize: size.normal,
    lineHeight: 22,
  },
  small: {
    fontSize: size.small,
    lineHeight: 22,
  },
  mini: {
    fontSize: size.mini,
    lineHeight: 22,
  },
  input: {
    label: {
      color: Colors.gray600,
      // TODO: add fontFamily
      fontSize: size.p,
      fontWeight: '600',
    },
    text: {
      // TODO: add fontFamily
      fontSize: size.p,
    },
    error: {
      // TODO: add fontFamily
      fontSize: size.small,
      color: Colors.danger,
      marginVertical: 8,
    },
  },
}

export default {
  alignment,
  size,
  style,
  types,
}
